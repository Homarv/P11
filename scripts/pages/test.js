function filerRecipeWithTag(tagArray, ArrayOfRecipes)
for (let i = 0 ; i < tagArray.length; i++){
    const tag = tagArray[i] 
    const newArrayOfRecipe= []
    for (let j = 0; j < ArrayOfRecipes.length; j++) {
        const recipe = ArrayOfRecipes[i];

        // Ajoute les ustensiles au tableau des ustensiles
        for (let j = 0; j < recipe.ustensils.length; j++) {
            const ustensil = recipe.ustensils[j];
            if (ustensil.indexOf(tag)) {
            newArrayOfRecipe.push(recipe);
            }
        }
    }
}
