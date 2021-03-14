<?php
require 'lib/simple_html_dom.php';
include 'Conn/connection.php';

$connection = new createCon();
$conn = $connection->connect();

for($i = 1; $i <= 5; $i++){
    $html = file_get_contents('https://jsonplaceholder.typicode.com/posts/'.$i);
    $result = json_decode($html);
    $query = "INSERT INTO web_scraping (userid, title, body) VALUES(" .$result->userId.", '".$result->title."', '".$result->body."')";
    $result = mysqli_query($conn, $query);
}

echo("Finalizado!");
?>