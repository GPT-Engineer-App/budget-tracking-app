<?php
session_start();
if (!isset($_SESSION['email'])) {
    header('Location: index.php');
    exit();
}
include 'db.php';
$email = $_SESSION['email'];
$sql = "SELECT * FROM economia WHERE usuario_email='$email'";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Economias</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <h1>Economias</h1>
        <canvas id="economiasChart"></canvas>
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?php echo $row['descricao']; ?></td>
                    <td><?php echo $row['valor']; ?></td>
                    <td><?php echo $row['data']; ?></td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
        <button onclick="window.location.href='add_economia.php'">Adicionar Economia</button>
    </div>
    <script src="scripts.js"></script>
</body>
</html>