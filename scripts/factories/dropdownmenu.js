//Génération des options pour chaque menu déroulant
function generateIngredientsList(selectElement, optionsList) {
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="ingredient-list"
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input= document.querySelector('.input-ingredient');
  selectAndListenInput(input,recipeItems)
}

function generateAppliancesList(selectElement, optionsList) {
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="appliance-list"
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input = document.querySelector('.input-appliance');
  selectAndListenInput(input,recipeItems)
}

function generateUstensilsList(selectElement, optionsList) {
  const recipeItems = []
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="ustensil-list"
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
    recipeItems.push(optionElement)
  });
  const input = document.querySelector('.input-ustensil');
  selectAndListenInput(input,recipeItems)
}

