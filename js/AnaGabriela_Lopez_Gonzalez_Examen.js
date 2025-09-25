const usuarios = [
    { nombre: "Ana", archivo: "archivo1.txt", activo: false },
    { nombre: "Jared", archivo: "archivo2.txt", activo: true },
    { nombre: "Luis", archivo: "archivo3.txt", activo: true }
];

const primerActivo = usuarios.find(usuario => usuario.activo === true);

console.log("Primer usuario activo:", primerActivo);

// muy bien ana gabriela