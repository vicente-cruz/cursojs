<?php
$nome = $_POST['nome'];
$senha = $_POST['senha'];

$verificador = array("status" => "Falha login!");

if ($nome == "Vicente" && $senha == "123") {
    $verificador["status"] = "OK!";
}

echo json_encode($verificador);
//    $p = $_POST;
//    $p['num_letras'] = strlen($_POST['nome']);
//    echo json_encode($p);
?>