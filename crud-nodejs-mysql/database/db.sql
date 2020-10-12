---creando la base de datos
CREATE DATABASE crudnodejsmysql;

---usando la base de datos

USE crudnodejsmysql;

---creando la tabla

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

---Mostrar LAS tablas creadas
SHOW TABLES;
