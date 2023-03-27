const Expense = require('../models/indexModel');

exports.postAddExpense = (req, res, next) => {
    const todoName = req.body.todoName;
    const todoDesc = req.body.todoDesc;
    const candyPrice = req.body.candyPrice;
    const candyQty = req.body.candyQty
    console.log(todoName, todoDesc,candyPrice,candyQty)
    Expense.create({
        todoName: todoName,
        todoDesc: todoDesc,
        candyPrice: candyPrice,
        candyQty: candyQty
    }).then((result) => {
        res.json('table created successfully')
    }).catch((err) => {
        console.log(err);
    })
}

exports.getAllexpenses = (req, res, next) => {
    Expense.findAll()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
        })
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    Expense.findByPk(id)
        .then((user) => {
            user.destroy();
        }).then((result) => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.error(err);
        })
}

