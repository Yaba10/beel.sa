<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $success = $_POST["success"] === "true" ? "Réussie" : "Échouée";
    
    $logMessage = "Utilisateur: $username, Connexion: $success\n";
    
    // Enregistrement dans le fichier log.txt
    $file = "log.txt";
    file_put_contents($file, $logMessage, FILE_APPEND);
    
    echo "Données enregistrées avec succès !";
} else {
    echo "Requête invalide.";
}
?>
