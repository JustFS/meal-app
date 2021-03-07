const ingredient = document.querySelector('.ingredient');
const btn = document.querySelector('#btn');
const footer = document.querySelector('footer');
let display = document.querySelector('#display-meals');
let video;
let choice;
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";





//*******************DEBUT RECETTE ALEATOIRE**********************//

//Fonction de récupération de l'Api aléatoire
const fetchRandom = async () => {
  await fetch(randomUrl)
  .then((res) => res.json())
  .then((data) => randomMeal = data.meals[0])
}


const getRandomIngredients = () => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let dish = randomMeal[`strIngredient${i}`];
    let measure = randomMeal[`strMeasure${i}`];
    if (dish) {
     ingredients.push(` ${dish} - ${measure} `);
    } else {
      break;
    }
     randomMealIngredients = 
   `<ul class="ingredients">
   ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
  </ul>`    
 }
}
 


// Fonction pour afficher la recete aléatoire
    btn.addEventListener('click', () => {
      const getRandom = async () => {
      await fetchRandom();
      footer.classList.remove("absolute");
      //Récupération des ingrédients
      getRandomIngredients();
      //Affichage des éléments de la recette aléatoire
          display.innerHTML = 
              `
              <div class="meals">
              <h1>${randomMeal.strMeal}</h1>
              <h2>${randomMeal.strArea}</h2>
              <p><img src=${randomMeal.strMealThumb}></p>
              <p class=ingredients-title>Ingredients - Measures: </p>
              ${randomMealIngredients}
              <p><span>Instructions:</span><br> ${randomMeal.strInstructions}</p>
              <p><a href="${randomMeal.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
              </div>
              `         
          }
    getRandom();   
    });
    //*************************FIN RECETTE ALEATOIRE*************************//
  









    
    //*************************DEBUT RECETTE RECHERCHEE**********************//




//   const fetchMeal = async () => {
//   await fetch(url + choice)
//     .then(res => res.json())
//     .then(data => meals = data.meals);  
// };


// const getMeal = async () => {
//   await fetchMeal();
//   footer.classList.remove("absolute");
//   //Récupération des ingrédients
//   meals.map((meal) => {
//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       dish = meal[`strIngredient${i}`];
//       measure = meal[`strMeasure${i}`];
//       if (dish) {
//       // ingredients.push(` ${dish} - ${measure} `);
//       } else {
//         break;
//       }
//    }
//    console.log(ingredients);
//    display.innerHTML = meals.map(e =>
//     `
//     <div class="meals">
//     <h1>${e.strMeal}</h1>
//     <h2>${e.strArea}</h2>
//     <p><img src=${e.strMealThumb}></p>
//     <p class="ingredients-title">Ingredients - Measure</p>
//     ${ingredients.map(ing =>`<p class="ingredients">${ing}<br></p>`).join("")}
//     <p>Instructions: ${e.strInstructions}</p>
//     <p><a href="${e.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
//     </div>
//     `   
    
//     )
     
//   })
// }


//         ingredient.addEventListener('input', (event) => {
//         choice = event.target.value;
//         getMeal();
//       })
     
    


