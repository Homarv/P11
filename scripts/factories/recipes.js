function recipeFactory(recipe){
   
  const article = document.createElement( 'article' );
  article.innerHTML = 
  `
  <div class="card">
    <img class="card-img-top" >
  <div class="card-body">
    <div class="flex">
      <p>${recipe.name}</p>
      <p> <i class="fa-regular fa-clock"></i> ${recipe.time}</p>
    </div>
      <div class="flex">
        
        <p class="card-description">${recipe.description}</p>
      </div>
  </div>
  </div>
  `;
  return (article);
}

function noRecipeFactory(){
   
  const article = document.createElement( 'article' );
  article.innerHTML = 
  `
  <div class="no-recip">
    <p>Aucune recette ne correspond à votre critère… vous pouvez
  chercher « tarte aux pommes », « poisson », etc. </p>
  </div>
  `;
  return (article);
}
