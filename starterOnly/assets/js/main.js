// DOM Elements
const modal = document.querySelector(".modal-overlay"); // Élément de la modale à afficher/masquer
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons pour ouvrir la modale
const closeBtn = document.querySelectorAll(".btn-close"); // Boutons pour fermer la modale
const topNav = document.getElementById("myTopnav"); // Barre de navigation principale

/**
 * Gère le mode responsive de la barre de navigation.
 * Ajoute ou retire la classe "responsive" en fonction de l'état actuel de la barre.
 */
const editNav = () => {
  topNav.className === "topnav" ? topNav.className += " responsive" : topNav.className = "topnav";
};

/**
 * Affiche la modale en modifiant le style display
 */
const launchModal = () => {
  modal.style.display = "block";
};

/**
 * Ferme la modale en modifiant le style display
 */
const closeModal = () => {
  modal.style.display = "none";
};

// Modal event listeners
// Ajoute un événement "click" à chaque bouton d'ouverture de la modale pour afficher la modale.
modalBtn.forEach(btn => btn.addEventListener("click", launchModal));

// Ajoute un événement "click" à chaque bouton de fermeture pour masquer la modale.
closeBtn.forEach(closeBtn => closeBtn.addEventListener("click", closeModal));