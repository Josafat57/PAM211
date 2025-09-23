const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 },
]

const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Encontrar a alguien llamado:", luis);

console.log("\n Personas:");
personas.forEach(persona => {
    console.log(persona.nombre + " - " + persona.edad + " años");
});

const total = personas.reduce((suma, persona) => suma + persona.edad, 0);
console.log("\n Total de edades:", total);