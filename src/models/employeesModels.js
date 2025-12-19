const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllEmployees(sortOption) {
    const db = getDB();
    let sortObj = { createdAt: -1 };
    switch (sortOption) {
        case 'name_asc':
            sortObj = { Name: 1 };
            break;
        case 'name_desc':
            sortObj = { Name: -1 };
            break;
        case 'surname_asc':
            sortObj = { Surname: 1 };
            break;
        case 'surname_desc':
            sortObj = { Surname: -1 };
            break;
        case 'yow_asc':
            sortObj = { yow: 1 };
            break;
        case 'yow_desc':
            sortObj = { yow: -1 };
            break;
        default:
            sortObj = { createdAt: -1 };
    }

    return await db.collection('employees').find().sort(sortObj).toArray();
}

async function getEmployeeById(id) {
    const db = getDB();
    return await db.collection('employees').findOne({ _id: new ObjectId(id) });
}

async function addEmployee(Name, Surname, description, yow, title) {
    const db = getDB();
    await db.collection('employees').insertOne({ Name, Surname, description, yow, title, createdAt: new Date() });
}

async function updateEmployee(id, Name, Surname, description, yow, title) {
    const db = getDB();
    await db.collection('employees').updateOne(
        { _id: new ObjectId(id) },
        { $set: { Name, Surname, description, yow, title } }
    );
}

async function deleteEmployee(id) {
    const db = getDB();
    await db.collection('employees').deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllemployees: getAllEmployees, getEmployeeById: getEmployeeById, addEmployee: addEmployee, updateEmployee: updateEmployee, deleteEmployee: deleteEmployee };
