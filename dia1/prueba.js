const mysql = require('mysql2/promise');

async function main(){
    try{
        let connection = await mysql.createConnection({
            host        : "localhost",
            user        : "root",
            password    : "MySQL.11",
            database    : "reto1"
        });
        console.log("Conexion correcta");

        // let sql = 'CREATE TABLE persona2 (id_persona INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                 'name VARCHAR(45), ' +
        //                                 'edad INT)';

        // let sql = "ALTER TABLE direccion ADD COLUMN CD INT (calle, numero , ciudad)" + 
        //                     "VALUES (\"Nueva Calle\", 1,\"Murcia\")";

        // let sql = "ALTER TABLE direccion ADD COLUMN CD INT"; //añadir columna
        // let sql = "ALTER TABLE direccion DROP COLUMN CD"; //eliminar columna

        // let sql = "DROP TABLE direccion "; //eliminar tabla dirección

        // let sql = "SELECT id_students, mark FROM marks WHERE mark = 0";// Setear todas las notas de los alumnos a ‘0’

        // let sql = "SELECT first_name, last_name FROM reto1.students";//mostrar nombre y apellido
        
        // let sql = "SELECT * FROM reto1.teacher";//mostrar nombre y apellido

        // let sql = "DELETE FROM marks WHERE DATEDIFF('2023-08-31', date) > 3650";

        let sql = "UPDATE marks SET mark = 5 WHERE mark < 5 "

        let [result] = await connection.query(sql);
        console.log(result);

        await connection.end();
    }catch(err){
        console.log(err);
        await connection.end();
    }
}

main();