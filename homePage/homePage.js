const coeurs = document.querySelectorAll(".coeur");

coeurs.forEach(coeur => coeur.addEventListener("click", ()=>{
  coeur.classList.toggle ("liked");
}))