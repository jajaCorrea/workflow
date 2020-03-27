const mongoose = require("mongoose");
//const Task = mongoose.model("Task");
const Task = require("../model/task");
const Schema = mongoose.Schema;

const proyectoSchema = mongoose.Schema({
    nombre:{type:String, required: true},
    estado:{type:String},
    tipo:{type:String },
    lider:{type:Array},
    miembros:{type:Array },
    tareas:{type: Schema.ObjectId, ref:"Task"},
    anotaciones:{type:String},
    createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
});


module.exports = mongoose.model("Proyecto", proyectoSchema);