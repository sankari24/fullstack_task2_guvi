<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$conformpassword = $_POST['conformpassword'];

if (!empty($username) || !empty($email) || !empty($password) || !empty($conformpassword)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "project";

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email FROM register WHERE email=? LIMIT 1";
        $INSERT = "INSERT INTO register (username, email, password, conformpassword) VALUES (?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum == 0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss", $username, $email, $password, $conformpassword);
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Email already registered";
        }

        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
