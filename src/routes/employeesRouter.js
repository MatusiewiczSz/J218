const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesControllers');

router.get('/', employeesController.getAll);
router.get('/about', employeesController.getAboutPage);
router.get('/add', employeesController.getAddForm);
router.post('/add', employeesController.postAdd);
router.get('/edit/:id', employeesController.getEditForm);
router.post('/edit/:id', employeesController.postEdit);
router.get('/delete/:id', employeesController.getDeleteForm);
router.post('/delete/:id', employeesController.deleteEmployee);

module.exports = router;