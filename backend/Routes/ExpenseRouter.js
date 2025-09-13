const express = require('express');
const router = express.Router();
const { getAllTransactions, deleteTransaction, addTransaction } = require("../controllers/ExpenseController");



router.get('/', getAllTransactions)
router.post('/', addTransaction)
router.delete('/:expenseid', deleteTransaction)

module.exports = router;