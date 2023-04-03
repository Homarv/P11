function dropdownMenuData(recipes){
  console.log(recipes)
  const essai = document.querySelector('.dropdown-menu')
  essai.innerHTML=''
  const ArrayofAppliance = []
  for(let i = 0; i < recipes.length; i++){
    const recipe = recipes[i];
    if (ArrayofAppliance.includes(recipe.appliance)){
    }
    else{
      ArrayofAppliance.push(recipe.appliance)
    }
  }
  for(let j=0; j < ArrayofAppliance.length; j++){
    const li = document.createElement('li')
    li.innerHTML =`${ArrayofAppliance[j]}`
    essai.appendChild(li)
  }
};


