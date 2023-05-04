//Génération des options pour chaque menu déroulant
function generateIngredientsList(selectElement, optionsList) {
  const classColor ="first-color"
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="ingredient-list"
    optionElement.textContent = option;
   //Si un tag créé a la même valeur que l'option, fait disparaître l'option de la liste 
   allTagArray.forEach((tag) => {
    if (option === tag) {
      optionElement.style.display = "none";
    }
  });
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input= document.querySelector('.input-ingredient');
  selectAndListenInput(input,recipeItems)
  listenerClickOnRecipesItem(recipeItems, classColor, recipes)
}

function generateAppliancesList(selectElement, optionsList) {
  const classColor ="second-color"
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="appliance-list"
    optionElement.textContent = option;
   //Si un tag créé a la même valeur que l'option, fait disparaître l'option de la liste 
   allTagArray.forEach((tag) => {
    if (option === tag) {
      optionElement.style.display = "none";
    }
  });
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input = document.querySelector('.input-appliance');
  selectAndListenInput(input,recipeItems)
  listenerClickOnRecipesItem(recipeItems,classColor)
}

function generateUstensilsList(selectElement, optionsList) {
  const classColor ="third-color"
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="ustensil-list"
    optionElement.textContent = option;
   //Si un tag créé a la même valeur que l'option, fait disparaître l'option de la liste 
   allTagArray.forEach((tag) => {
    if (option === tag) {
      optionElement.style.display = "none";
    }
  });
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input = document.querySelector('.input-ustensil');
  selectAndListenInput(input,recipeItems)
  listenerClickOnRecipesItem(recipeItems, classColor)
}


