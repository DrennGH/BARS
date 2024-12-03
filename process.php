<?php
  // Include the connect.php file
  include 'connect.php';

  // Get the form data
  $requestId = $_POST['requestId'];
  $requestType = $_POST['requestType'];
  $studentId = $_POST['studentId'];
  $lastName = $_POST['lastName'];
  $firstName = $_POST['firstName'];
  $email = $_POST['email'];
  $date = $_POST['date'];
  $items = $_POST['items'];

  // Insert the data into the database
  insertData($requestId, $requestType, $studentId, $lastName, $firstName, $email, $date, $items);

  // Redirect to the confirm page
  header('Location: confirm.html');
  exit;
?>