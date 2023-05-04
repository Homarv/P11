function displayDataRecipes(ArrayOfRecipes) {
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML = '';
  
  ArrayOfRecipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    recipesSection.appendChild(recipeModel);
  });
  
  const ingredientsContainer = document.querySelectorAll('.ingredients-list');
  
  ingredientsContainer.forEach((container, j) => {
    console.log(container)
    console.log(j)
    const recipe = ArrayOfRecipes[j];
    const ingredientsList = document.createElement('ul');

    recipe.ingredients.forEach((ingredientcaracteristic) => {
      const li = document.createElement('li');

      if (ingredientcaracteristic.unit === undefined & ingredientcaracteristic.quantity === undefined ){
        li.innerHTML = `<strong> ${ingredientcaracteristic.ingredient}</strong>  `;
      } else if (ingredientcaracteristic.unit === undefined ){
        li.innerHTML = `<strong>${ingredientcaracteristic.ingredient}</strong>  : ${ingredientcaracteristic.quantity} `;
      } else {
        li.innerHTML = `<strong>${ingredientcaracteristic.ingredient}</strong> : ${ingredientcaracteristic.quantity} ${ingredientcaracteristic.unit} `;
      }
      ingredientsList.appendChild(li);
    });
    container.appendChild(ingredientsList);
  });
}

function displayCrit(recipes){
  const ustensilsList = [];
  const appliancesList = [];
  const ingredientsList = [];
  const ingredientsSelect = document.getElementById("ingredients-select")
  const appliancesSelect = document.getElementById("appliances-select")
  const ustensilsSelect = document.getElementById("ustensils-select")

  recipes.forEach((recipe) => {
    // Ajoute les ustensiles au tableau des ustensiles
    recipe.ustensils.forEach((ustensil) => {
      if (!ustensilsList.includes(ustensil)) {
        ustensilsList.push(ustensil);
      }
    });
  
    // Ajoute les appareils au tableau des appareils
    const appliance = recipe.appliance;
    if (!appliancesList.includes(appliance)) {
      appliancesList.push(appliance);
    }
  
    // Ajoute les ingrédients au tableau des ingrédients
    recipe.ingredients.forEach((ingredient) => {
      if (!ingredientsList.includes(ingredient.ingredient)) {
        ingredientsList.push(ingredient.ingredient);
      }
    });
  });
  
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