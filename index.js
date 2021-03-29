window.onload = function(){
    
    
    const petsData = [
      {
        name: "Joao Farisse",
        species: "HUman",
        favFoods: ["Chips", "Pizza", "<strong>any</strong> food"],
        birthYear: 2004,
       
      {
        name: "Barksalot",
        species: "Dog",
        favFoods: ["Cats", ],
        birthYear: 2008,
        
      },
      {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        
      }
    ];
    
    function age(birthYear) {
      let calculatedAge = new Date().getFullYear() - birthYear;
      if (calculatedAge == 1) {
        return "1 year old";
      } else if (calculatedAge == 0) {
        return "Baby";
      } else {
        return `${calculatedAge} years old`;
      }
    }
    
    function foods(foods) {
      return `
    <h4>Favorite Foods</h4>
    <ul class="foods-list">
    ${foods.map(food => `<li>${food}</li>`).join("")}
    </ul>
    `;
    }
    
    function petTemplate(pet) {
      return `
        <div class="animal">
        <img class="pet-photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
        <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
        ${pet.favFoods ? foods(pet.favFoods) : ""}
        </div>
      `;
    }
    
    document.getElementById("app").innerHTML = `
      <h1 class="app-title">Pets (${petsData.length} results)</h1>
      ${petsData.map(petTemplate).join("")}
      <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
    `;
    
        
        
    }