<?php
  // Database connection settings
  $host = '%barsdatabase';
  $username = 'G2BARS';
  $password = '2(!09F\ST1i4O?*3Goi';
  $database = 'bars';

  // Create a connection to the database
  $conn = new mysqli($host, $username, $password, $database);

  // Check if the connection is successful
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // Retrieve the form data
  $student_id = $_POST['student-id'];
  $last_name = $_POST['last-name'];
  $first_name = $_POST['first-name'];
  $email = $_POST['email'];
  $date = $_POST['date'];
  $items = $_POST['items'];

  // Get the request type from the URL parameter
  $request_type = $_GET['mode']; // Get the mode from the URL parameter (borrow or reserve)

  // Generate a random request ID between 100 and 999
  $request_id = rand(100, 999);

  // Insert the data into the database
  $sql = "INSERT INTO requests (request_id, request_type, student_id, last_name, first_name, dlsu_d_email, date, items)
  VALUES ('$request_id', '$request_type', '$student_id', '$last_name', '$first_name', '$email', '$date', '$items')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
      header("Location: end.html");
      exit;
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>