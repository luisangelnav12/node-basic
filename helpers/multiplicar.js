const fs = require("fs");
// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log("==================");
//     console.log("Tabla del: ", base);
//     console.log("==================");
//     let salida = "";

//     for (let i = 0; i < 10; i++) {
//       salida += `${base} * ${i} = ${base * i}\n`;
//     }
//     // fs.writeFile("tabla-5.txt", salida, (err) => {
//     //   if (err) throw err;
//     //   console.log("The file has been saved!");
//     // });
//     console.log(salida);
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     resolve(`tabla-${base}.txt creado`);
//   });
// };
const crearArchivo = async (base = 5) => {
  try {
    console.log("==================");
    console.log("Tabla del: ", base);
    console.log("==================");
    let salida = "";

    for (let i = 0; i < 10; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }
    // fs.writeFile("tabla-5.txt", salida, (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  crearArchivo,
};
