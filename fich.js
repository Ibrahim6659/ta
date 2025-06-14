function annulerReservation() {
      if (confirm("Êtes-vous sûr(e) de vouloir annuler votre réservation ?")) {
        window.location.reload();
      }
    }
function remplirFormulaire(nomHotel) {
    // Remplit automatiquement le champ nom de l'hôtel
    document.getElementById('hotel').value = nomHotel;

    // Fait défiler jusqu'au formulaire
    const form = document.querySelector('form');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function annulerReservation() {
    // Réinitialise tous les champs du formulaire
    document.querySelector("form").reset();
    document.getElementById("hotel").value = ""; // Vide le champ hôtel
}