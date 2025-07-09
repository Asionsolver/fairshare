"use client"

import { BarLoader } from "react-spinners"
import { useConvexQuery } from "../../../hooks/useConvexQuery"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Plus, User, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CreateGroupModal } from "./_components/CreateGroupModal"
import { useRouter, useSearchParams } from "next/navigation"
import ContactPageLoader from "@/components/loader/ContactPageLoader"



const Contacts = () => {
    const [groupModal, setGroupModal] = useState(false)
    const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts)
    // console.log(data)

    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const createGroupParam = searchParams.get("createGroup")
        if (createGroupParam === "true") {
            setGroupModal(true)
            const url = new URL(window.location.href)
            url.searchParams.delete("createGroup")
            router.replace(url.pathname + url.search)
        }
    }, [searchParams, router])


    if (isLoading) {
        return <ContactPageLoader />
    }



    const { users, groups } = data || { users: [], groups: [] }
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-5xl gradient-title">Contacts</h1>
                <Button onClick={() => setGroupModal(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Group
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <User className="mr-2 h-5 w-5" />
                        People
                    </h2>
                    {
                        users.length === 0 ? (
                            <Card>
                                <CardContent className="text-center py-6 text-muted-foreground">
                                    No contacts found. Start by adding your friends or colleagues.
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {users.map((user) => (
                                    <Link key={user.id} href={`/person/${user.id}`}>
                                        <Card>
                                            <CardContent>
                                                <div className="flex justify-between items-center ">
                                                    <div className="flex  items-center gap-3">
                                                        <Avatar className="h-10 w-10">
                                                            <AvatarImage src={user.imageUrl} alt={user.name} />
                                                            <AvatarFallback>
                                                                {user.name.charAt(0).toUpperCase()}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div >
                                                            <p className="font-medium">{user.name}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {user.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )
                    }
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <Users className="mr-2 h-5 w-5" />
                        Groups
                    </h2>

                    {
                        users.length === 0 ? (
                            <Card>
                                <CardContent className="text-center py-6 text-muted-foreground">
                                    No groups found. Create a group to start tracking shared expenses.
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {groups.map((group) => (
                                    <Link key={group.id} href={`/groups/${group.id}`}>
                                        <Card>
                                            <CardContent>
                                                <div className="flex justify-between items-center ">
                                                    <div className="flex  items-center gap-3">
                                                        <div className=" bg-primary/15 rounded-md p-2">
                                                            <Users className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div >
                                                            <p className="font-medium">{group.name}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {group.memberCount} members
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Create group modal */}
            <CreateGroupModal isOpen={groupModal} onClose={() => setGroupModal(false)} onSuccess={(groupId) => router.push(`/groups/${groupId}`)} />
        </div>

    )
}

export default Contacts