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
    ingredientsContainer[j].appendChild(ingredientsList);$
  }
}

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
  generateIngredientsList(ingredientsSelect, ingredientsList, allTagArray);
  ustensilsSelect.innerHTML = ""
  generateUstensilsList(ustensilsSelect, ustensilsList, allTagArray);
  appliancesSelect.innerHTML= ""
  generateAppliancesList(appliancesSelect, appliancesList, allTagArray);
}

async function init(){
  displayDataRecipes(recipes);
  displayCrit(recipes)
  listenerPrincipalSearch()
  listenerClickOnButtonAndInputs()
}

init();