function displayCrit(recipes){
  const ustensilsList = [];
  const appliancesList = [];
  const ingredientsList = [];
  const ingredientsSelect = document.getElementById("ingredients-select")
  const appliancesSelect = document.getElementById("appliances-select")
  const ustensilsSelect = document.getElementById("ustensils-select")

for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i];

    // Ajoute les ustensiles au tableau des ustensiles
    for (let j = 0; j < recipe.ustensils.length; j++) {
      const ustensil = recipe.ustensils[j];
      if (!ustensilsList.includes(ustensil)) {
        ustensilsList.push(ustensil);
      }
    }

    // Ajoute les appareils au tableau des appareils
    const appliance = recipe.appliance;
    if (!appliancesList.includes(appliance)) {
      appliancesList.push(appliance);
    }

    // Ajoute les ingrédients au tableau des ingrédients
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j].ingredient;
      if (!ingredientsList.includes(ingredient)) {
        ingredientsList.push(ingredient);
      }
    } 
  }
  ingredientsSelect.innerHTML =""
  generateIngredientsList(ingredientsSelect, ingredientsList);
  ustensilsSelect.innerHTML = ""
  generateUstensilsList(ustensilsSelect, ustensilsList);
  appliancesSelect.innerHTML= ""
  generateAppliancesList(appliancesSelect, appliancesList);
}

// récupère les Objets recettes et les injectes dans le html 
function displayDataRecipes(ArrayOfRecipes){
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML= '';
  for (let i = 0; i < ArrayOfRecipes.length; i++) {
    const recipe = ArrayOfRecipes[i];
    const recipeModel = recipeFactory(recipe);
    recipesSection.appendChild(recipeModel);
  }

  // Parcour tous les conteneurs d'ingrédients pour injecter les listes d'ingrédients 
  const ingredientsContainer = document.querySelectorAll('.ingredients-list');
  for (let j = 0; j < ingredientsContainer.length; j++) {
    const recipe = ArrayOfRecipes[j];
    // Créer une liste d'ingrédients pour la recette en utilisant un élément <ul>
    const ingredientsList = document.createElement('ul');
    // Parcourir tous les ingrédients dans la recette
    for (let k = 0; k < recipe.ingredients.length; k++) {
      const ingredientcaracteristic = recipe.ingredients[k];
      //console.log(ingredientcaracteristic)
      // Créer un élément de liste pour l'ingrédient et l'ajoute à la liste dans le HTML
      const li = document.createElement('li');
      if (ingredientcaracteristic.unit === undefined & ingredientcaracteristic.quantity === undefined ){
        li.innerHTML = `<strong> ${ingredientcaracteristic.ingredient}</strong>  `;
      }
      else if (ingredientcaracteristic.unit === undefined ){
        li.innerHTML = `<strong>${ingredientcaracteristic.ingredient}</strong>  : ${ingredientcaracteristic.quantity} `;
      }
      else{
        li.innerHTML = `<strong>${ingredientcaracteristic.ingredient}</strong> : ${ingredientcaracteristic.quantity} ${ingredientcaracteristic.unit} `;
      }
      ingredientsList.appendChild(li);
    }
    // Ajouter la liste d'ingrédients au conteneur d'ingrédients c
    ingredientsContainer[j].appendChild(ingredientsList);
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
     return ArrayOfRecipes
  }
}

// lorsqu'un utilisateur tape dans les champs de recherche Principal
let inputsearch = document.querySelector('#site-search');
inputsearch.addEventListener('keyup', function() {
  // lance le filtre si la longueur de la recherche est supérieur à 3 caractères 
  if(inputsearch.value.length >= 3){
    const ArrayOfRecipes = filterRecipes(inputsearch, recipes);
    console.log(ArrayOfRecipes)
    displayCrit(ArrayOfRecipes)
  }
  // sinon affiche l'ensemble des recettes 
  else{
    displayDataRecipes(recipes);
    displayCrit(recipes)
  }
});

displayDataRecipes(recipes);
displayCrit(recipes)
//dropdownMenuData(recipes);