let cuentas = [
    { cc: "123456", name: "Juan", clave: "1234", cta: "1", saldo: 1000 },
    { cc: "654321", name: "Maria", clave: "5678", cta: "2", saldo: 2000 },
    { cc: "789123", name: "Luis", clave: "91011", cta: "3", saldo: 1500 }
];
let movimientos = [];

function menu(){
let eleccion = prompt(`  
            Menu Bancario 
    
        1. Crear cuenta               
        2. Consignar en la cuenta         
        3. Retirar dinero                 
        4. Pagar Servicios                
        5. Mostrar movimientos              
        6. Salir
        
        Ingrese el numero de la opcion que desea realizar: 
        `);}

function crearCuenta(){
    let cta = cuentas.length + 1;

    let id = prompt("Ingrese su numero de identificacion: ");
    let nombre = prompt("Ingrese su nombre: ");
    let clave = prompt("Ingrese su clave: ");

    cuentas.push({
        id: id,
        nombre: nombre,
        clave: clave,
        saldo: 0
    });

    movimientos.push({
        cta: String(cta),
        movimientos: []
    });

    console.log("Cuenta creada exitosamente.");

    alert("Creando cuenta.\n"+
        "Espere un momento...\n"+
        "Cuenta creada exitosamente.\n"+
        `Su numero de cuenta es: ${cta}\n`+
        "Su saldo actual es de $ 0");
}

function consignar() {
    // Pedir el número de cuenta
    let numeroCuenta = prompt("Ingrese el número de la cuenta a la que desea consignar:");

    // Buscar la cuenta en el arreglo
    let cuenta = cuentas.find(c => c.cc === numeroCuenta);

    if (cuenta) {
        // Mensaje indicando que la cuenta está creada
        alert(`La cuenta con número ${numeroCuenta} está creada y pertenece a ${cuenta.name}`);

        // Pedir el monto a consignar
        let monto = parseFloat(prompt("Ingrese el monto que desea consignar:"));

        // Validar que el monto sea positivo
        if (isNaN(monto) || monto <= 0) {
            alert("El monto ingresado no es válido. Debe ser un número mayor que cero.");
        } else {
            // Realizar la consignación
            cuenta.saldo += monto;
            alert(`Consignación exitosa. Nuevo saldo de la cuenta ${numeroCuenta}: $${cuenta.saldo}`);
        }
    } else {
        // Si la cuenta no existe
        alert("La cuenta ingresada no está registrada.");
    }
}

function retirar() {
    // Pedir el número de cuenta
    let numeroCuenta = prompt("Ingrese el número de la cuenta a la que desea retirar:");

    // Buscar la cuenta en el arreglo
    let cuenta = cuentas.find(c => c.cc === numeroCuenta);

    if (cuenta) {
        // Mensaje indicando que la cuenta está creada
        alert(`La cuenta con número ${numeroCuenta} está creada y pertenece a ${cuenta.name}`);

        // Pedir el monto a consignar
        let monto = parseFloat(prompt("Ingrese el monto que desea retirar:"));

        // Validar que el monto sea positivo
        if (isNaN(monto) || monto <= 0) {
            alert("El monto ingresado no es válido. Debe ser un número mayor que cero.");
        } else {
            // Realizar la consignación
            cuenta.saldo -= monto;
            alert(`Retiro exitoso. Nuevo saldo de la cuenta ${numeroCuenta}: $${cuenta.saldo}`);
        }
    } else {
        // Si la cuenta no existe
        alert("La cuenta ingresada no está registrada.");
    }
}

retirar();