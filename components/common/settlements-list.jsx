import { Card, CardContent } from "../ui/card"
import { format } from "date-fns"
import { ArrowLeftRight, Trash2 } from "lucide-react"
import { Badge } from "../ui/badge"
import { useConvexQuery } from "@/hooks/useConvexQuery"
import { api } from "@/convex/_generated/api"


const SettlementsList = ({ settlements, isGroupSettlement = false, userLookupMap }) => {

    const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);
    if (!settlements || !settlements.length) {
        return (
            <Card>
                <CardContent className={"py-8 text-center text-muted-foreground"}>
                    No settlements found.
                </CardContent>
            </Card>
        )

    }

    const getUserDetails = (userId) => {
        return {
            name: userId === currentUser?._id ? "You" : userLookupMap[userId]?.name || "Other User",
            id: userId
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {settlements.map((settlement) => {
                const payer = getUserDetails(settlement.paidByUserId);
                const receiver = getUserDetails(settlement.receivedByUserId);
                const isCurrentUserPayer = settlement.paidByUserId === currentUser?._id;
                const isCurrentUserReceiver = settlement.receivedByUserId === currentUser?._id;

                return (
                    <Card key={settlement._id} className={"hover:bg-muted/30 transition-colors duration-300"}>
                        <CardContent className={"py-4"}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary p-2 rounded-full">
                                        <ArrowLeftRight className="w-5 h-5 text-background" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">
                                            {isCurrentUserPayer ?
                                                `You paid ${receiver.name}`
                                                : isCurrentUserReceiver ?
                                                    ` ${payer.name} paid you`
                                                    : ` ${payer.name} paid ${receiver.name}`}
                                        </h3>

                                        <div className="text-sm text-muted-foreground flex items-center gap-2 ">
                                            <span>
                                                {format(new Date(settlement.date), "MMM dd, yyyy")}
                                            </span>
                                            {
                                                settlement.note && (
                                                    <>
                                                        <span>●</span>
                                                        <span className="text-sm text-muted-foreground ml-2">
                                                            {settlement.note}
                                                        </span>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`text-sm text-right ${isCurrentUserPayer ? 'text-green-600' : 'text-red-600'}`}>
                                        <div className="font-medium">
                                            ${settlement.amount.toFixed(2)}
                                        </div>

                                        {isGroupSettlement ? (
                                            <Badge className="mt-1" variant={"outline"}>
                                                Group Settlement
                                            </Badge>
                                        ) : (

                                            <div className="text-center text-muted-foreground text-xs mt-1">
                                                {isCurrentUserPayer ? (
                                                    <span className="text-amber-600">You Paid</span>
                                                ) : isCurrentUserReceiver ? (
                                                    <span className="text-green-600">You received</span>
                                                ) : (
                                                    <span className="text-red-600">Payment</span>
                                                )}
                                            </div>

                                        )}
                                    </div>



                                </div>


                            </div>

                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default SettlementsList