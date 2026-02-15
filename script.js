// Vérification que le fichier JS est bien chargé
console.log("Script connecté");

// Sélection des éléments DOM
const form = document.getElementById("fuel-form");
const countrySelect = document.getElementById("country");
const yearSelect = document.getElementById("year");
const resultSection = document.getElementById("result");
const errorText = document.getElementById("error");

// Écoute du submit du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement de la page

  const country = countrySelect.value;
  const year = yearSelect.value;

  // Validation simple
  if (!country) {
    errorText.textContent = "Veuillez sélectionner un pays.";
    errorText.classList.remove("hidden");
    resultSection.classList.add("hidden");
    return;
  }

  // Reset erreur
  errorText.classList.add("hidden");

  // Pour l’instant, on affiche juste dans la console
  console.log("Pays sélectionné :", country);
  console.log("Année sélectionnée :", year);

  // Feedback visuel temporaire
  resultSection.classList.remove("hidden");
  document.getElementById("price-text").textContent =
    `Pays : ${country} — Année : ${year}`;
});
