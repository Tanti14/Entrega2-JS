const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ======================================================================================================================================================
// =====================================================================Desarrollo=======================================================================
// ======================================================================================================================================================

console.log("<=============================================================================>");
console.log("Listado de Pizzas con ID impar:");
for (let i = 0; i < pizzas.length; i++) {
  if (i % 2 !== 1) {
    console.log("La " + pizzas[i].nombre + " tiene ID impar. Su ID es: " + pizzas[i].id);
  }
}

console.log("<=============================================================================>");
console.log("Listado de Pizzas con precio menor a $600 pesos:");

pizzas.forEach((val) => {
  if (val.precio < 600) {
    console.log(
      "La " +
        val.nombre +
        ", que es la mas barata, tiene un precio de $" +
        val.precio
    );
  }
});

console.log("<=============================================================================>");
console.log("Listado de Pizzas con su respectivo precio: ");

pizzas.forEach((pizza) => {
  console.log("La " + pizza.nombre + " tiene un valor de: $" + pizza.precio);
});


console.log("<=============================================================================>");
console.log("Listado de Pizzas con su respectivos ingredientes: ");
pizzas.forEach((pizza) => {
  console.log("Los ingredientes de la " + pizza.nombre + " son:");
  let contador = 1
  pizza.ingredientes.forEach(ingre => {
    console.log(contador + ") " + ingre)
    contador++;
  });
  console.log("======================================================");
});

