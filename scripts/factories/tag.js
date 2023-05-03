const tagIngredientArray = []
const tagAppliancesArray = []
const tagUstensilsArray = []
const allTagArray = []

function createTag(recipeItem, classColor){
    const recipeItemValue = recipeItem.textContent
    if(classColor ==="first-color"){ 
        tagIngredientArray.push(recipeItemValue)
        allTagArray.push(recipeItemValue)
    }
    else if(classColor === "second-color"){
        tagAppliancesArray.push(recipeItemValue)
        allTagArray.push(recipeItemValue)
    }
    else if(classColor === "third-color"){
        tagUstensilsArray.push(recipeItemValue)
        allTagArray.push(recipeItemValue)
    }
    const tagSelector = document.querySelector('.tag')
    const tag = document.createElement('btn')
    //console.log(tagSelector)
    tag.innerHTML =`${recipeItemValue} <i class="fa-regular fa-circle-xmark"></i>`
    tag.classList.add('tag-btn', classColor)
    tagSelector.appendChild(tag)
    tag.addEventListener('click', function(){
        if(classColor ==="first-color"){ 
            destroyTag(tag, recipeItem, tagIngredientArray, allTagArray)
        }
        else if(classColor === "second-color"){
            destroyTag(tag, recipeItem, tagAppliancesArray, allTagArray)
        }
        else if(classColor === "third-color"){
            destroyTag(tag, recipeItem, tagUstensilsArray, allTagArray)
        }
    })
    filterRecipeWithTag(tagIngredientArray, tagAppliancesArray, tagUstensilsArray, recipes)
}

function filterRecipeWithTag(tagIngredientsArray, tagAppliancesArray , tagUstensilsArray, recipes){
    //console.log(tagUstensilsArray)
    const ArrayOfRecipes = []
    //console.log(ArrayOfRecipes)

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        let areAlltagsPresent = true;  

        if(tagIngredientsArray.length > 0) {
            let areAllIngredientsPresent = true;
            for (let j = 0; j < tagIngredientsArray.length; j++) {
                // console.log(recipe.ingredients)
                const foundIndex = recipe.ingredients.findIndex(item => item.ingredient === tagIngredientsArray[j]);
                // console.log(foundIndex)
                if (foundIndex === -1) {
                    areAllIngredientsPresent = false;
                    break;
                }
            }
            if (!areAllIngredientsPresent) {
                areAlltagsPresent = false;
            }
        }

        if(tagAppliancesArray.length > 0){
            const allElementsInString = tagAppliancesArray.every(element => recipe.appliance.includes(element));
            if (!allElementsInString) {
                areAlltagsPresent = false;
            } 
        }

        if(tagUstensilsArray.length > 0) {
            let areAllUstensilsPresent = true;
            for (let j = 0; j < tagUstensilsArray.length; j++) {
                //console.log(recipe.ustensils)
                const foundIndex = recipe.ustensils.findIndex(item => item === tagUstensilsArray[j]);
                // console.log(foundIndex)
                if (foundIndex === -1) {
                    areAllUstensilsPresent = false;
                    break;
                }
            }
            if (!areAllUstensilsPresent) {
                areAlltagsPresent = false;
            }
        }
        //console.log(areAlltagsPresent)
        if(areAlltagsPresent){
            ArrayOfRecipes.push(recipe)
        } 
    }
  //  console.log(ArrayOfRecipes)
  //  console.log(tagAppliancesArray, tagIngredientArray, tagUstensilsArray)
    displayDataRecipes(ArrayOfRecipes)
    displayCrit(ArrayOfRecipes)
}

function destroyTag(tag, recipeItem, tagArray, allTagArray){
        tag.style.display="none"
        recipeItem.style.display="flex"
        const indexOfRecipeItem = tagArray.indexOf(recipeItem.textContent)
        tagArray.splice(indexOfRecipeItem)
        console.log(tagArray)
        const indexOfRecipeItem2 = allTagArray.indexOf(recipeItem.textContent)
        allTagArray.splice(indexOfRecipeItem2)
        console.log(allTagArray)
        filterRecipeWithTag(tagIngredientArray,tagAppliancesArray, tagUstensilsArray, recipes, allTagArray)  
}