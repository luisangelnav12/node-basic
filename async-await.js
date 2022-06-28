const empleados = [
  { id: 1, nombre: "Juan", salario: 1000 },
  { id: 2, nombre: "Pedro", salario: 2000 },
  { id: 3, nombre: "Maria", salario: 3000 },
  { id: 4, nombre: "Pablo", salario: 4000 },
];
const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
  { id: 3, salario: 3000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id == id)?.nombre;
    empleado ? resolve(empleado) : reject(`el empleado con id ${id} no existe`);
  });
};
const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id == id)?.salario;
    salario ? resolve(salario) : reject(`el salario con id ${id} no existe`);
  });
};
const id = 10;
const getinfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado} tiene un salario de ${salario}`;
  } catch (err) {
    throw err;
  }
};
getinfoUsuario(id)
  .then((msg) => {
    console.log("toodo goodd");
    console.log(msg);
  })
  .catch((err) => {
    console.log("todo mal");
    console.log(err);
  });
