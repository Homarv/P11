// récupère les Objets recettes et les injectes dans le html 
function displayDataRecipes(Arraytest){
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML= '';
  for (let i = 0; i < Arraytest.length; i++) {
    const recipe = Arraytest[i];
    const recipeModel = recipeFactory(recipe);
    recipesSection.appendChild(recipeModel);
  }
  
  const ingredientsContainer = document.querySelectorAll('.ingredients-list');
  // Parcourir tous les conteneurs d'ingrédients dans la page HTML
  for (let j = 0; j < ingredientsContainer.length; j++) {
    const recipe = Arraytest[j];

    // Créer une liste d'ingrédients pour la recette en utilisant un élément <ul>
    const ingredientsList = document.createElement('ul');
  
    // Parcourir tous les ingrédients dans la recette
    for (let k = 0; k < recipe.ingredients.length; k++) {
      const ingredientcaracteristic = recipe.ingredients[k];
      //console.log(ingredientcaracteristic)
      // Créer un élément de liste pour l'ingrédient et l'ajouter à la liste dans la page HTML
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
  
    // Ajouter la liste d'ingrédients au conteneur d'ingrédients correspondant dans la page HTML
    ingredientsContainer[j].appendChild(ingredientsList);
  }
}

// fonction pour filtrer les options de la liste déroulante en fonction de la saisie de l'utilisateur
function filterRecipes(inputsearch, recipes) {
  // convertit la saisie de l'utilisateur en minuscules pour une comparaison 
  const searchTerm = inputsearch.value.toLowerCase();
  // pour chaque option de cette
  let ArrayTest = []
  console.log(ArrayTest)
  for (var i = 0; i < recipes.length; i++) {
    let NameOfRecipe = recipes[i].name.toLowerCase();
    let DescriptionOfRecipe = recipes[i].description;
    // si le texte de l'option contient le terme de recherche, affiche l'option, sinon la cache
    if (NameOfRecipe.indexOf(searchTerm) > -1 || 
      DescriptionOfRecipe.indexOf(searchTerm) > -1) {
        ArrayTest.push(recipes[i])
    } else {
    }
  }
  // si la recherche ne correspond à aucune recette, lance la fonction de message d'erreur 
  if(ArrayTest.length === 0){
    displayMessageNoRecipe()
  }
  // si la recherche correspond à une ou plusieurs recettes, les affiches 
  else{
    displayDataRecipes(ArrayTest)
   // dropdownMenuData(ArrayTest)
  }
}

// lorsqu'un utilisateur tape dans les champs de recherche Principal
let inputsearch = document.querySelector('#site-search');
inputsearch.addEventListener('keyup', function() {
  // lance le filtre si la longueur de la recherche est supérieur à 3 caractères 
  if(inputsearch.value.length >= 3){
    console.log("recipes")
    filterRecipes(inputsearch, recipes);
  }
  // sinon affiche l'ensemble des recettes 
  else{
    displayDataRecipes(recipes)
 //   console.log(dropdownMenuData(recipes))
  }
});


function displayMessageNoRecipe(){
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML= '';
  const noRecipeModel = noRecipeFactory();
  recipesSection.appendChild(noRecipeModel);
}

displayDataRecipes(recipes);
//dropdownMenuData(recipes);