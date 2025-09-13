
const UserModel = require("../Models/userModels.js");

const addTransaction = async (req, res) => {
    const { _id } = req.user;
    const { text, amount } = req.body;



    try {

        if (!text || !amount) {
            return res.send("All fields are required");
        }

        const userData = await UserModel.findByIdAndUpdate(
            _id,  //user id
            { $push: { expenses: req.body } },
            { new: true } // For Returning the new updated documents
        )
        return res.status(200)
            .json({
                message: "Expense added successfully",
                success: true,
                data: userData?.expenses

            })

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err,
            success: false
        })
    }
}

const getAllTransactions = async (req, res) => {
    const { _id } = req.user;
    try {
        const userData = await UserModel.findById(_id).select('expenses');
        return res.status(200)
            .json({
                message: "Fetched Expenses successfully",
                success: true,
                data: userData?.expenses
            })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err,
            success: false
        })
    }
}

const deleteTransaction = async (req, res) => {
    const { _id } = req.user;

    const expenseId = req.params.expenseid;

    try {
        const userData = await UserModel.findByIdAndUpdate(
            _id,
            { $pull: { expenses: { _id: expenseId } } },
            { new: true } // For Returning the updated documents
        )
        return res.status(200)
            .json({
                message: "Expense Deleted successfully",
                success: true,
                data: userData?.expenses
            })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err,
            success: false
        })
    }
}

module.exports = {
    addTransaction,
    getAllTransactions,
    deleteTransaction
}