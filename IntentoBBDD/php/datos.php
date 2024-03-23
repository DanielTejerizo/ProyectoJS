<?php
$servername = "//localhost/js";
$username = "js";
$password = "js";
$dbname = "js";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

$libros = array();


if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        $libros[] = $row;
    }
} else {
    echo "No se encontraron libros.";
}

$conn->close();

?>
