// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterDropdownOptions(input, recipeItems) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  const searchTerm = input.value.toLowerCase();
  for (var i = 0; i < recipeItems.length; i++){
    const recipeItem = recipeItems[i];
    //si le texte de l'option contient le terme de recherche, affiche l'option, sinon la cache
    if (recipeItem.textContent.toLowerCase().includes(searchTerm)) {
      recipeItem.style.display = '';
    } else {
      recipeItem.style.display ='none';
    }
  }
}

// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterRecipes(inputsearch, recipes) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  const searchTerm = inputsearch.value.toLowerCase();
  // pour chaque option de cette
  let ArrayOfRecipes = []
  for (var i = 0; i < recipes.length; i++) {
    let NameOfRecipe = recipes[i].name.toLowerCase();
    let DescriptionOfRecipe = recipes[i].description;
    // si le texte de l'input contient le terme de recherche, ajoute la recette au tableau des recettes
    if (NameOfRecipe.indexOf(searchTerm) > -1 || 
      DescriptionOfRecipe.indexOf(searchTerm) > -1) {
        ArrayOfRecipes.push(recipes[i])
    }
  }
  // si la recherche ne correspond à aucune recette, lance la fonction de message d'erreur 
  if(ArrayOfRecipes.length === 0){
    displayMessageNoRecipe()
  }
  // si la recherche correspond à une ou plusieurs recettes, les affiches 
  else{
     displayDataRecipes(ArrayOfRecipes)
     displayCrit(ArrayOfRecipes)
  }
  return ArrayOfRecipes
}









