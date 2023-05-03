function listenerPrincipalSearch(){
// lorsqu'un utilisateur tape dans les champs de recherche Principal
  let inputsearch = document.querySelector('#site-search');
  inputsearch.addEventListener('keyup', function() {
    // lance le filtre si la longueur de la recherche est supérieur à 3 caractères 
    if(inputsearch.value.length >= 3){
        filterRecipes(inputsearch, recipes)
    }
    // sinon affiche l'ensemble des recettes 
    else{
      displayDataRecipes(recipes);
      displayCrit(recipes);
    }
  })
}

//Listener Input Options
function selectAndListenInput(input,recipeItems) {
    input.addEventListener('keyup', function() {
    filterDropdownOptions(input, recipeItems);
    });
}
  
function listenerClickOnButtonAndInputs(){
    //Change les boutton en input, fait apparaître les listes 
    const filtersbuttons = document.querySelectorAll('.filter-button');
    const filtersinputs = document.querySelectorAll('.filter-input');
    const closeOptions = document.querySelectorAll('.fa-chevron-up');
    const allPrevElementListSelect = document.querySelectorAll(".filter-input");

    for (let i = 0; i < filtersbuttons.length; i++) {
        const filtersbutton = filtersbuttons[i]
        const filtersinput = filtersinputs[i]
        const closeOption = closeOptions[i]
        const listSelect = allPrevElementListSelect[i].nextElementSibling

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
}

function listenerClickOnRecipesItem(recipeItems, classColor, recipes){
  for(let i= 0 ; i < recipeItems.length ; i++){
    const recipeItem = recipeItems[i]
    recipeItem.addEventListener("click", function(){
      createTag(recipeItem, classColor);
    })
  }
}
