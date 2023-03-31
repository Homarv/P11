// récupère les Objets recettes et les injectes dans le html 
function displayDataRecipes(Arraytest){
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML= '';
  Arraytest.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    recipesSection.appendChild(recipeModel);
  });
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
  if(ArrayTest.length === 0){
    displayMessageNoRecipe()
  }
  else{
    displayDataRecipes(ArrayTest)
  }
}

  // lorsqu'un utilisateur tape dans les champs de recherche Principal
let inputsearch = document.querySelector('#site-search');
inputsearch.addEventListener('keyup', function() {
  if(inputsearch.value.length >= 3){
    console.log("recipes")
    filterRecipes(inputsearch, recipes);
  }
  else{
    displayDataRecipes(recipes)
  }
});


function displayMessageNoRecipe(){
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML= '';
  const noRecipeModel = noRecipeFactory();
  recipesSection.appendChild(noRecipeModel);
}

displayDataRecipes(recipes)