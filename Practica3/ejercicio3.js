function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    console.log("Iniciando petición...");
    const resultado = await simularPeticionAPI();
    console.log(resultado);
    return resultado;
}

async function Peticion() {
    try {
        console.log("Petición recibida");
        console.log("Esto puede tardar unos segundos...");
        const datos = await obtenerDatos();
        console.log("Proceso completado. ", datos);
    } catch (error) {
        console.error("Error: ", error);
    }
}

Peticion();
