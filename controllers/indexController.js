const { parseUrl } = require('mysql2/lib/connection_config');
const Expense = require('../models/indexModel');

exports.postAddExpense = (req, res, next) => {
    const todoName = req.body.todoName;
    const todoDesc = req.body.todoDesc;
    const candyPrice = req.body.candyPrice;
    const candyQty = req.body.candyQty
    console.log(todoName, todoDesc, candyPrice, candyQty)
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

exports.updateQty = async (req, res, next) => {
    const qty = 1
    const id = req.body.id;
    try {
        const user = await Expense.findByPk(id);
        console.log(user.candyQty)
        const newqty = parseInt(user.candyQty = user.candyQty - qty);
        await user.save()
        console.log(newqty)
        return res.status(200).json({ message: 'Quantity updated successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.updateQty2 = async (req, res, next) => {
    const qty = 2
    const id = req.body.id;
    console.log(req.body)
    try {
        const user = await Expense.findByPk(id);
        console.log(user.candyQty)
        const newqty = parseInt(user.candyQty = user.candyQty - qty);
        await user.save()
        console.log(newqty)
        return res.status(200).json({ message: 'Quantity updated successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};