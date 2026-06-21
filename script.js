/* ========== CONFIGURATION ========== */
const TELEGRAM_USERNAME = 'Cvrisyvnis';

/* ========== FONCTIONS ========== */

// Envoi par Email
function envoyerEmail() {
    const phoneInput = document.getElementById('phoneInput');
    const errorMsg = document.getElementById('errorMsg');
    let phone = phoneInput.value.replace(/\s+/g, '').replace(/[()-]/g, '');

    // Validation
    if (phone.length < 6) {
        errorMsg.classList.add('show');
        phoneInput.parentElement.style.borderColor = '#ff4444';
        return;
    }

    // Reset erreur
    errorMsg.classList.remove('show');
    phoneInput.parentElement.style.borderColor = '#1a1a1a';

    // Redirection mailto
    const sujet = encodeURIComponent('Demande de bannissement');
    const corps = encodeURIComponent(`Bonjour,\n\nJe souhaite signaler le numéro suivant : +${phone}\n\nMerci de prendre les mesures nécessaires.\n\nCordialement.`);
    window.location.href = `mailto:support@devcifer.com?subject=${sujet}&body=${corps}`;
}

// Envoi par Telegram
function envoyerTelegram() {
    const phoneInput = document.getElementById('phoneInput');
    const errorMsg = document.getElementById('errorMsg');
    let phone = phoneInput.value.replace(/\s+/g, '').replace(/[()-]/g, '');

    // Validation
    if (phone.length < 6) {
        errorMsg.classList.add('show');
        phoneInput.parentElement.style.borderColor = '#ff4444';
        return;
    }

    // Reset erreur
    errorMsg.classList.remove('show');
    phoneInput.parentElement.style.borderColor = '#1a1a1a';

    // Redirection Telegram
    const message = encodeURIComponent(`Salut Dev Cifer ! Je souhaite faire bannir le numéro : +${phone} 🔥`);
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${message}`, '_blank');
}

/* ========== ÉVÉNEMENTS ========== */

// Cacher l'erreur quand l'utilisateur tape
document.getElementById('phoneInput').addEventListener('input', function() {
    document.getElementById('errorMsg').classList.remove('show');
    this.parentElement.style.borderColor = '#1a1a1a';
});

// Bloquer les caractères non autorisés (chiffres, espaces, + uniquement)
document.getElementById('phoneInput').addEventListener('keypress', function(e) {
    const char = e.key;
    if (!/[\d\s+]/.test(char)) {
        e.preventDefault();
    }
});
