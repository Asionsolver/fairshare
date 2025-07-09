import { getCategoryById, getCategoryIcon } from "@/lib/expenseCategories"
import { api } from "@/convex/_generated/api"

import { Card, CardContent } from "../ui/card"
import { format } from "date-fns"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useConvexMutation, useConvexQuery } from "@/hooks/useConvexQuery"


const ExpenseList = ({
    expenses,
    showOtherPerson = true,
    isGroupExpense = false,
    otherPersonId = null,
    userLookupMap = {}
}) => {
    const { data: currentUser } = useConvexQuery(api.users.getCurrentUser)
    const deleteExpense = useConvexMutation(api.expenses.deleteExpense)

    if (!expenses || !expenses.length) {
        return (
            <Card>
                <CardContent className={"py-8 text-center text-muted-foreground"}>
                    No expenses found.
                </CardContent>
            </Card>
        )
    }
    // Helper to get user details from cache or look up from expense
    const getUserDetails = (userId) => {
        return {
            name: userId === currentUser?._id ? "You" : userLookupMap[userId]?.name || "Other User",
            imageUrl: null,
            id: userId
        }
    }

    // Check if the user can delete an expense (creator or payer)
    const canDeleteExpense = (expense) => {
        if (!currentUser) return false;
        return (
            expense.createdBy === currentUser._id ||
            expense.paidByUserId === currentUser._id
        );
    };

    const handleDeleteExpense = async (expense) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");

        if (!confirmDelete) return;
        try {
            await deleteExpense.mutate({ expenseId: expense._id });
            toast.success("Expense deleted successfully");

        }
        catch (error) {
            console.error("Error deleting expense:", error);
            toast.error("Failed to delete expense" + error.message);
        }
    }
    return (
        <div className="flex flex-col gap-4">
            {expenses.map((expense) => {
                const payer = getUserDetails(expense.paidByUserId);
                const isCurrentUserPayer = expense.paidByUserId === currentUser?._id;
                const category = getCategoryById(expense.category);
                const CategoryIcon = getCategoryIcon(category.id);
                const showDeleteOption = canDeleteExpense(expense);

                return (
                    <Card key={expense._id} >
                        <CardContent className={"py-4"}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary p-2 rounded-full">
                                        <CategoryIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{expense.description}</h3>

                                        <div className="text-sm text-muted-foreground flex items-center gap-2 ">
                                            <span>
                                                {format(new Date(expense.date), "MMM dd, yyyy")}
                                            </span>
                                            {/* {
                                                showOtherPerson && (
                                                    <>
                                                        <span>●</span>
                                                        <span className="text-sm text-muted-foreground ml-2">
                                                            {isCurrentUserPayer ? "You" : `Paid by ${payer.name}`}
                                                        </span>
                                                    </>
                                                )
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`text-sm text-right ${isCurrentUserPayer ? 'text-green-600' : 'text-red-600'}`}>
                                        <div className="font-medium">
                                            ${expense.amount.toFixed(2)}
                                        </div>

                                        {isGroupExpense ? (
                                            <Badge className="mt-1" variant={"outline"}>
                                                Group Expense
                                            </Badge>
                                        ) : (

                                            <div className="text-center text-muted-foreground text-xs mt-1">
                                                {isCurrentUserPayer ? (<span className="text-green-600">You Paid</span>) : (<span className="text-red-600">Paid by {payer.name}</span>)}
                                            </div>

                                        )}
                                    </div>

                                    {showDeleteOption && (
                                        <Button className="text-red-500 bg-transparent h-8 w-8 hover:text-red-700 hover:bg-red-100 transition-colors duration-500" size="icon" onClick={() => handleDeleteExpense(expense)}>
                                            <Trash2 className="w-4 h-4" />
                                            <span className="sr-only">Delete expense</span>
                                        </Button>
                                    )}

                                </div>


                            </div>
                            <div className="mt-3 text-sm">
                                <div className="flex text-sm gap-2 flex-wrap">
                                    {
                                        expense.splits.map((split, idx) => {
                                            const splitUser = getUserDetails(split.userId, expense);
                                            const isCurrentUser = split.userId === currentUser?._id;

                                            return (
                                                <Badge className={`flex items-center text-background gap-2 ${split.paid ? "bg-green-500" : "bg-primary"}`} key={idx}>
                                                    <Avatar className={`h-4 w-4 `} key={idx}>

                                                        <AvatarFallback className={`text-xs font-medium ${split.paid ? "bg-green-300" : "bg-[#d69d33]"}`}>
                                                            {splitUser.name.charAt(0).toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span>
                                                        {isCurrentUser ? "You " : splitUser.name + " "}
                                                        {split.amount.toFixed(2)}
                                                    </span>
                                                </Badge>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default ExpenseList