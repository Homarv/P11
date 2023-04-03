// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterDropdownOptions(input, dropdownMenu) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  const searchTerm = input.value.toLowerCase();

  // sélectionne toutes les options de la liste déroulante
  const options = dropdownMenu.querySelectorAll('.dropdown-item');

  // pour chaque option dans la liste déroulante
  for (var i = 0; i < options.length; i++) {
    const option = options[i];
    const text = option.textContent.toLowerCase(); // récupère le texte de l'option
    // si le texte de l'option contient le terme de recherche, affiche l'option, sinon la cache
    if (text.indexOf(searchTerm) > -1) {
      option.style.display = '';
    } else {
      option.style.display = 'none';
    }
  }
}

  // lorsqu'un utilisateur tape dans les champs de recherche Ingrédients, Ustensils et Appareils
let inputs = document.querySelectorAll('.dropdown-menu input');
let dropdownMenus = document.querySelectorAll('.dropdown-menu');
for (var i = 0; i < inputs.length ; i++) {
  const input = inputs[i]
  const dropdownMenu = dropdownMenus[i]
input.addEventListener('keyup', function() {
  filterDropdownOptions(input, dropdownMenu);
}
)};
  

  
  
  
  