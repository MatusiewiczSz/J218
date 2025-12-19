const employeesModel = require('../models/employeesModels');

async function getAll(req, res) {
    const sort = req.query.sort || '';
    const employees = await employeesModel.getAllemployees(sort);
    res.render('pages/index', { employees, sort });
}

function getAddForm(req, res) {
    res.render('pages/add');
}

function getAboutPage(req, res) {
    res.render('pages/about');
}

async function postAdd(req, res) {
    const { Name, Surname, description, yow, title } = req.body;
    await employeesModel.addEmployee(Name, Surname, description, yow, title);
    res.redirect('/');
}

async function getEditForm(req, res) {
    const employee = await employeesModel.getEmployeeById(req.params.id);
    res.render('pages/edit', { employee: employee });
}

async function postEdit(req, res) {
    const { Name, Surname, description, yow, title } = req.body;
    await employeesModel.updateEmployee(req.params.id, Name, Surname, description, yow, title);
    res.redirect('/');
}

async function getDeleteForm(req, res) {
     const employee = await employeesModel.getEmployeeById(req.params.id);
     res.render('pages/delete', { employee: employee });
}

async function deleteEmployee(req, res) {
    await employeesModel.deleteEmployee(req.params.id);
    res.render('pages/deleted');
}

module.exports = {
    getAll,
    getAddForm,
    postAdd,
    getAboutPage,
    getEditForm,
    postEdit,
    getDeleteForm,
    deleteEmployee
};
