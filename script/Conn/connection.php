<?php

class createCon  {
    var $host = 'localhost';
    var $user = 'root';
    var $pass = '';
    var $db = 'app_teste';
    var $myconn;

    function connect() {
        $con = mysqli_connect($this->host, $this->user, $this->pass, $this->db);
        if (!$con) {
            die('Erro ao conectar a base de dados!');
        } else {
            $this->myconn = $con;
            echo 'Conexão estabelecida. Aguarde...'. PHP_EOL;
        }
        return $this->myconn;
    }
}