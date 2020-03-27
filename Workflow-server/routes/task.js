const express = require("express");
const router = express.Router();

const Task = require("../model/task");

router.get('/task', (req, res, next) => {
    taskQuery = Task.find()
    taskQuery.then(task => {
        try {
            res.status(201).json({
                task
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get("/task/:id", (req, res, next) => {
    Task.findOne({ _id: req.params.id }).then(task => {
        try {
            res.status(201).json({
                task
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.post('/task', (req, res, next) => {
    const task = new Task({
        nombre: req.body.nombre,
        proyecto: req.body.proyecto,
        prioridad: req.body.prioridad,
        estado: req.body.estado,
        progreso: req.body.progreso,
        responsable: req.body.responsable,
        descripcion: req.body.descripcion,
        anotaciones:req.body.anotaciones
    });
    task.save().then(task => {
        res.status(201).json({
            message: 'proyecto create!',
            task: task
        });
    }).catch(error => {
        console.log(error);
        res.status(502).json({
            message: 'error al crear la tarea'
        });
    });
});

router.put("/task/:id", (req, res, next) => {
    Task.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, useFindAndModify: false} )
    .then(task => {
        if (!task) {
            return res.status(501).json({
                message: 'Error al actualizar'
            });
        }
        Task.findOne({ _id: req.params.id }).then(task => {
            res.send(task);
        });         
    })
    .catch(error => {
        return res.status(501).json({
            message: "Credenciales invalidas"
        });
    });
});



module.exports = router;