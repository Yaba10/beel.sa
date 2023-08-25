// script.js
const connexionForm = document.getElementById('connexion-form');
const messageElement = document.getElementById('message');

connexionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomUtilisateur = document.getElementById('nomUtilisateur').value;
    const motDePasse = document.getElementById('motDePasse').value;

    const utilisateurValide = "utilisateur123";
    const motDePasseValide = "motdepasse123";

    if (nomUtilisateur === utilisateurValide && motDePasse === motDePasseValide) {
        messageElement.textContent = "Connexion réussie !";
        enregistrerLog(nomUtilisateur, true);
    } else {
        messageElement.textContent = "Identifiants incorrects. Veuillez réessayer.";
        enregistrerLog(nomUtilisateur, false);
    }
});

function enregistrerLog(nomUtilisateur, reussi) {
    const fs = require('fs');
    const date = new Date().toISOString();
    const message = `${date} - Utilisateur: ${nomUtilisateur}, Connexion: ${reussi ? 'Réussie' : 'Échouée'}\n`;

    fs.appendFile('log.txt', message, (err) => {
        if (err) {
            console.error("Erreur lors de l'écriture dans le fichier journal :", err);
        }
    });
}

