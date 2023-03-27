const express = require('express');

const path = require('path');

const router = express.Router();

const indexController = require('../controllers/indexController');


router.get('/get-all',indexController.getAllexpenses)

router.post('/submit-form',indexController.postAddExpense);

router.delete(`/delete-user/:id`,indexController.deleteUser);


module.exports = router;