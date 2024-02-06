// objeto.js
const animal = {
    Nombre: "Nombre del animal",
    Tipo: "Tipo del animal",
    Hábitat: "Hábitat del animal",
    Edad: 5,
    Color: "Color del animal"
  };
  
  console.log("Valores iniciales del objeto:");
  console.log(animal);
  
  animal.Edad = 8;
  animal.Color = "Nuevo color";
  
  console.log("Nuevo valor de Edad y Color:");
  console.log("Edad:", animal.Edad);
  console.log("Color:", animal.Color);
  