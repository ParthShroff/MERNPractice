const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

const crudRoutes = express.Router();
let Crud = require('./crud.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://library.atop4.mongodb.net/Library',
    { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

crudRoutes.route('/').get((req, res) => {
    Crud.find((err, results) => {
        if (err) console.log(err);
        else res.json(results);
    });
});

crudRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Crud.findById(id, (err, result) => {
        if (err) console.log(err);
        else res.json(result);
    });
});

crudRoutes.route('/add').post((req, res) => {
    let list = new Crud(req.body);
    list.save().then(list => {
        res.status(200).json({'list': 'Task added'});
    }).catch(err => {
        res.status(400).send('Adding failed');
    });
});

crudRoutes.route('/update/:id').post((req, res) => {
    Crud.findById(req.params.id, (err, data) => {
        if (!data) res.status(404).send("Task is not present");
        else {
            data.task = req.body.task;
            data.date = req.body.date;
            data.desc = req.body.desc;
            data.importance = req.body.importance;

            data.save().then(data => {
                res.json('Data is updated!');
            }).catch(err => {
                res.status(400).send("Update isn't possible");
            });
        }
    });
});



app.use('/all_task', crudRoutes);

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
})