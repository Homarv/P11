//Filter Ustensils 
const filtersbuttons = document.querySelectorAll('.filter-containt');
const test = document.getElementById("ingredients-select")

for(let i = 0 ; i < filtersbuttons.length ; i++ ){

  const filtersbutton = filtersbuttons[i]

  filtersbutton.addEventListener('click', function() {
  // Créer un champ de saisie de texte
  filtersbutton.display = "none"
  if(i=== 0){
    console.log(test)
    test.style.display = "flex" ;
    filtersbutton.innerHTML= ""
    filtersbutton.innerHTML=  
    `
    <div class="filter-input">
      <input type="text" class="form-control input-ingredient" placeholder="rechercher un ingrédient">
    <i class="fa-solid fa-chevron-up"></i>  
    </div>
    `
    dropdownButton.appendChild(tuti)
    

  }if(i=== 1){
    input.setAttribute('class', 'form-control dropdown-menu-input bg-success');
    input.setAttribute('placeholder', 'rechercher un Appareils');
  }
  
  // Remplacer le bouton par le champ de saisie de texte

  SelectAndListenAllOption()
});
}