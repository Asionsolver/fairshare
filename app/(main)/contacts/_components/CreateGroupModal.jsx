import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { useConvexMutation, useConvexQuery } from "@/hooks/useConvexQuery"
import { api } from "@/convex/_generated/api"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { UserPlus, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { toast } from "sonner"


const groupSchema = z.object({
    name: z.string().min(1, "Group name is required"),
    description: z.string().optional(),

})
export function CreateGroupModal({ isOpen, onClose, onSuccess }) {
    const [selectedMembers, setSelectedMembers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [commandOpen, setCommandOpen] = useState(false)

    const addMember = (user) => {
        if (!selectedMembers.some((m) => m.id === user.id)) {
            setSelectedMembers([...selectedMembers, user])
        }

        setCommandOpen(false)
    }


    const removeMembers = (userId) => {
        setSelectedMembers(selectedMembers.filter((m) => m.id !== userId))
    }



    const { data: currentUser } = useConvexQuery(api.users.getCurrentUser)
    const { data: searchResults, isLoading: isSearching } = useConvexQuery(api.users.searchUsers, {
        query: searchQuery,
    })

    const createGroup = useConvexMutation(api.contacts.createGroup)

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: zodResolver(groupSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })
    const handleClose = () => {
        reset()
        setSelectedMembers([])
        onClose()
    }

    const onSubmit = async (data) => {
        // console.log("Creating group with data:", data, "Members:", selectedMembers)
        try {
            const memberIds = selectedMembers?.map((m) => m.id);
            const groupId = await createGroup.mutate({
                name: data.name,
                description: data.description,
                members: memberIds,
            });

            toast.success("Group created successfully!")
            handleClose()
            if (onSuccess) {
                onSuccess(groupId)
            }
        } catch (error) {
            toast.error("Failed to create group" + error.message)
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Group</DialogTitle>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <Label htmlFor="name">Group Name</Label>
                        <Input
                            id="name"
                            {...register("name")}
                            placeholder="Enter group name"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            {...register("description")}
                            placeholder="Enter group description (optional)"
                        />

                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="members">Members</Label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {currentUser && (
                                <Badge className="px-3 py-1 bg-secondary text-destructive dark:text-foreground dark:bg-secondary-foreground">
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage src={currentUser.imageUrl} />
                                        <AvatarFallback>{currentUser.name.charAt(0) || "?"}</AvatarFallback>
                                    </Avatar>
                                    <span>{currentUser.name}(You)</span>
                                </Badge>
                            )}

                            {/* selected members */}
                            {selectedMembers.map((member) => (
                                <Badge
                                    key={member.id}

                                    className="px-3 py-1 flex bg-secondary text-destructive dark:text-foreground dark:bg-secondary-foreground"
                                >
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage src={member.imageUrl} />
                                        <AvatarFallback>{member.name?.charAt(0) || "?"}</AvatarFallback>
                                    </Avatar>
                                    <span>{member.name}</span>
                                    <button
                                        type="button"

                                        onClick={() => removeMembers(member.id)}
                                        className="ml-2 text-muted-foreground hover:text-red-500 bg-transparent! hover:bg-red-200! p-2 rounded-md "
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                            {/* add user to selected members */}
                            <Popover open={commandOpen} onOpenChange={setCommandOpen}>
                                <PopoverTrigger asChild>
                                    <Button type="button" variant={"outline"} size={"sm"} className="h-12 flex items-center gap-1 text-xs">
                                        <UserPlus className="h-3 w-3" />
                                        Add Member
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 " align="start" side="bottom">
                                    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                                        <CommandInput placeholder="Search by name or email..." value={searchQuery} onValueChange={setSearchQuery} />
                                        <CommandList>
                                            <CommandEmpty>
                                                {searchQuery.length < 2 ? (<p className="py-3 text-sm text-center text-muted-foreground">Type at least 2 characters to search</p>) : isSearching ? (<p className="py-3 text-sm text-center text-muted-foreground px-4">Searching...</p>) : (<p className="py-3 px-4 text-sm text-center text-muted-foreground">No results found.</p>)}
                                            </CommandEmpty>
                                            <CommandGroup heading="Users">
                                                {searchResults?.map((user) => (
                                                    <CommandItem
                                                        key={user.id}
                                                        value={user.name + " " + user.email}
                                                        onSelect={() => addMember(user)}
                                                    >
                                                        <div className="flex  items-center gap-2">
                                                            <Avatar className="h-6 w-6">
                                                                <AvatarImage src={user.imageUrl} alt={user.name} />
                                                                <AvatarFallback>
                                                                    {user.name.charAt(0).toUpperCase()}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex flex-col">
                                                                <span className="font-sm">{user.name}</span>
                                                                <span className="text-xs text-muted-foreground">
                                                                    {user.email}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </CommandItem>

                                                ))}
                                            </CommandGroup>

                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        {
                            selectedMembers.length === 0 && (
                                <p className="text-sm text-primary">
                                    Add at least one other person to the group.
                                </p>
                            )
                        }
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={handleClose}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting || selectedMembers.length === 0}>{isSubmitting ? "Creating..." : "Create Group"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

    )
}
