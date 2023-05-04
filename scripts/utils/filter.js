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
  recipes.forEach((recipe) => {
    const nameOfRecipe = recipe.name.toLowerCase();
    const descriptionOfRecipe = recipe.description;
    if (nameOfRecipe.includes(searchTerm) || descriptionOfRecipe.includes(searchTerm)) {
      ArrayOfRecipes.push(recipe);
    }
  });
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









