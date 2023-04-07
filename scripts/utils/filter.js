// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterDropdownOptions(input, recipeItem) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  console.log(input)
  const searchTerm = input.value.toLowerCase();

  // sélectionne toutes les options de la liste déroulante
  const options = recipeItem.querySelectorAll('.recipe-item');

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

function SelectAndListenAllOption() {
  let inputs = document.querySelector('.input-ingredient');
  console.log(inputs)
  let recipeItems = document.querySelectorAll('.recipe-item');
  console.log(dropdownMenus)

  for (var i = 0; i < inputs.length ; i++) {
    const input = inputs[i]
    const recipeItem = recipeItems[i]
    input.addEventListener('keyup', function() {
    filterDropdownOptions(input, recipeItem);
    })
  };

}

const ustensilsList = [];
const appliancesList = [];
const ingredientsList = [];

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

function generateOptions(selectElement, optionsList) {
  optionsList.forEach(option => {
    const optionElement = document.createElement("li");
    optionElement.className ="recipe-item"
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}

//Génération des options pour chaque menu déroulant
const ingredientsSelect = document.getElementById("ingredients-select");
generateOptions(ingredientsSelect, ingredientsList);

// const ustensilsSelect = document.getElementById("ustensils-select");
// generateOptions(ustensilsSelect, ustensilsList);

// const appliancesSelect = document.getElementById("appliances-select");
// generateOptions(appliancesSelect, appliancesList);


