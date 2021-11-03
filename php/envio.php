<?php
if (isset($_POST['enviado'])) {
  if (empty($_POST['nome']) || strlen($_POST['nome']) < 3 || strlen($_POST['nome']) > 150) {
    echo 'Digite um nome valido!';
  } else if (empty($_POST['telefone']) || strlen($_POST['telefone']) > 30 || !is_numeric($_POST['telefone'])) {
    echo 'Digite um numero Valido';
  } else if (empty($_POST['gmail']) || !filter_var($_POST['gmail'], FILTER_VALIDATE_EMAIL)) {
    echo 'Digite um E-mail Valido';
  } else {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $gmail = $_POST['gmail'];
    $assunto = $_POST['assunto'];

    $arquivo =
      '<html>
  <p><b>Nome</b>' . $nome . '</p>
  <p><b>Telefone</b>' . $telefone . '</p>
  <p><b>Gmail</b>' . $gmail . '</p>
  <p><b>Assunto</b>' . $assunto  . '</p>
</html>';

    $detinatorio = "mariocarvalho755@gmail.com";
    $assunto = "Proposta de site";



    mail($detinatorio, $assunto, $arquivo);


    echo '<meta http-equiv="refresh" content="http://127.0.0.1:5500/iO-Dev/contato.html">';
  }
}
