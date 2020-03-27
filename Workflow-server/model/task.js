const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
    //_id: Schema.Types.ObjectId,
    nombre:{type:String, required: true},
    proyecto:{type:String, required: true},
    prioridad:{type:String, required: true},
    estado:{type:String, required:true},
    progreso:{type:Number, required:true},
    responsable:{type:String, required:true},
    descripcion:{type:String, required:true},
    anotaciones:{type:String}
});


module.exports = mongoose.model("task", taskSchema);