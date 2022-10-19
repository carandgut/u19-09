const mongoose = require("mongoose");

// 1.conectarnos
mongoose
  .connect("mongodb://localhost:27017")
  .then( () => {console.log("Se Conecto con la base de datos!")})
  .catch( () => {console.log("Hubo un error en la conexion!")})

  // 2. definir un schema
  const usuario = {
     numDocumento: String,
      
  }
