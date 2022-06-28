const fs = require("fs");
const { crearArchivo } = require("./helpers/multiplicar");
console.clear();

const [, , arg3 = "base=5"] = process.argv;
console.log(arg3);
let [, base] = arg3.split("=");
console.log(base);
// const base = 9;

crearArchivo(base)
  .then((nombreArchivo) => {
    console.log(nombreArchivo, "creado");
  })
  .catch((err) => {
    console.log(err);
  });
