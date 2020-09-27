# CrudNodeJSmySQL
interaccion con base de datos en nodejs

Commnados ejecutados 

npm install express mysql express-myconnection morgan ejs

node src/app.js para encender el servidor y ejecutar el archivo

y para hacer cambios automaicos \

npm install nodemon -D ----solo necesario para el desarrollo

---- Uso de docker para base de datos mySQL
sudo docker run --name mysql-latest  -p 3306:3306 -p 33060:33060  -e MYSQL_ROOT_HOST='%' -e MYSQL_ROOT_PASSWORD='strongpassword' -d mysql/mysql-server:latest

---para saber ip del coontainer

udo  docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 01b34ac5aad
172.17.0.2

---para entrar en el
sudo docker exec -it mysql-latest mysql -u root -pstrongpassword