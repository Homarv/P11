// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterDropdownOptions(input, recipeItems) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  const searchTerm = input.value.toLowerCase();
  for (var i = 0; i < recipeItems.length; i++) {
    const recipeItem = recipeItems[i];
    //si le texte de l'option contient le terme de recherche, affiche l'option, sinon la cache
    if (recipeItem.textContent.toLowerCase().includes(searchTerm)) {
      recipeItem.style.display = '';
    } else {
      recipeItem.style.display = 'none';
    }
  }
}

function selectAndListenInput(input,recipeItems) {
  input.addEventListener('keyup', function() {
    filterDropdownOptions(input, recipeItems);
  });
}

//Change les boutton en input, fait apparaître les listes 
const filtersbuttons = document.querySelectorAll('.filter-button');
const filtersinputs = document.querySelectorAll('.filter-input');
const closeOptions = document.querySelectorAll('.fa-chevron-up');
const allListSelect = document.querySelectorAll(".filter-input");

for (let i = 0; i < filtersbuttons.length; i++) {
  const filtersbutton = filtersbuttons[i]
  const filtersinput = filtersinputs[i]
  const closeOption = closeOptions[i]
  const listSelect = allListSelect[i].nextElementSibling
  console.log(listSelect)

  filtersbutton.addEventListener('click', function() {
      listSelect.style.display ="flex";
      filtersbutton.style.display = "none"
      filtersinput.style.display = "flex"
  
  });

  closeOption.addEventListener('click', function(){
      listSelect.style.display = "none";
      filtersbutton.style.display = "flex"
      filtersinput.style.display = "none"
    
  }) 
}











