const express = require("express");
const router = express.Router();

const Proyectos = require("../model/proyecto");

router.get('/proyecto', (req, res, next) => {
    proyectQuery = Proyectos.find()
    .populate('tareas');
    proyectQuery.then(proyectos => {
        try {
            res.status(201).json({
                proyectos
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

router.get("/proyecto/:id", (req, res, next) => {
    Proyectos.findOne({ _id: req.params.id }).then(proyecto => {
        try {
            res.status(201).json({
                proyecto
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

router.post('/proyecto', (req, res, next) => {
    const Proyecto = new Proyectos({
        nombre: req.body.nombre,
        estado: req.body.estado,
        tipo: req.body.tipo,
        lider: req.body.lider,
        miembros: req.body.miembros,
    });
    console.log(Proyecto);
    Proyecto.save().then(Proyecto => {
        res.status(201).json({
            message: 'proyecto create!',
            proyecto: Proyecto
        });
    }).catch(error => {
        console.log(error);
        res.status(502).json({
            message: 'error al crear proyecto'
        });
    });
});

module.exports = router;