const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const path = require('path');
const {
	handleLogin,
	protectionLayer,
	handleLogout,
	getAllBooks,
	getSpecificBook,
	updateSpecificBook,
	createBook,
	getStudentDetails,
	getBookByClass,
	createInvoice,
	reductBooks
} = require('../controllers/controller.js');
const conn = require('../controllers/dbConnect.js');

router.route('/login')
	.post(handleLogin)

router.route('/home')
	.get(protectionLayer, (req, res) => { res.sendFile(path.join(__dirname, '../public/home.html')); })

router.route('/logout')
	.get(handleLogout)

router.route('/books')
	.get(protectionLayer, (req, res) => { res.sendFile(path.join(__dirname, '../public/books_home.html')) })

router.route('/get-all-books')
	.get(protectionLayer, getAllBooks)

router.route('/getStudentDetails?:rid')
	.get(getStudentDetails)

router.route('/getBookByClass?:cl')
	.get(getBookByClass)

router.route('/get-specific-book?:id')
	.get(getSpecificBook)

router.route('/update-book?:id')
	.put(updateSpecificBook)
	.post(createBook)

router.route('/reductBooks?:class')
	.get(reductBooks)

router.route('/createInvoice')
	.get(protectionLayer,(req,res)=>{res.sendFile(path.join(__dirname,'../public/generateBill.html'))})
	.post(protectionLayer, createInvoice)

// router.route('/test')
// 	.get(test)

module.exports = router;