function genererCodePromo() {
    const cartAmount = parseFloat(document.getElementById("cart-amount").value);
    const promoCodeElement = document.getElementById("promo-code");
    const discountAmountElement = document.getElementById("discount-amount");

    let promoCode = "";
    let discountAmount = "";

    // Calcul de la réduction en fonction du montant de la commande
    if (cartAmount >= 0 && cartAmount < 50) {
        promoCode = "TOURNEE10";
        discountAmount = "10% de réduction pour un panier inférieur à 50€";
    } else if (cartAmount >= 50 && cartAmount < 100) {
        promoCode = "TOURNEE15";
        discountAmount = "15% de réduction pour un panier de 50€ à 99€";
    } else if (cartAmount >= 100 && cartAmount < 200) {
        promoCode = "TOURNEE25";
        discountAmount = "25% de réduction pour un panier de 100€ à 299€";
    } else if (cartAmount >= 200) {
        promoCode = "TOURNEE35";
        discountAmount = "35% de réduction pour un panier de 400€ ou plus";
    } else {
        promoCode = "Montant invalide";
        discountAmount = "";
    }

    // Affichage du code promo et du montant de la réduction dans le pop-up
    promoCodeElement.innerText = promoCode;
    discountAmountElement.innerText = discountAmount;
    ouvrirPopup();
}

function ouvrirPopup() {
    document.getElementById("promo-popup").classList.remove("hidden");
}

function fermerPopup() {
    document.getElementById("promo-popup").classList.add("hidden");
}
