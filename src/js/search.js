const fetchMeal = async () => {
  await fetch(url + choice)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
};

const getMeal = async () => {
  await fetchMeal();
  footer.classList.remove("absolute");

  let ingrStorage = {};

  console.log(meals);

  for (let i = 0; i < meals.length; i++) {
    let array = [];
    for (let j = 0; j < 21; j++) {
      if (meals[i][`strIngredient${j}`]) {
        let string = `<li>${meals[i][`strIngredient${j}`]} - ${
          meals[i][`strMeasure${j}`]
        }</li>`;
        array.push(string);
      } else ingrStorage[i] = array;
    }
    meals[i].ingrStorage = ingrStorage[i].join("");
  }

  display.innerHTML = meals.map(
    (meal) =>
      `
      <div class="meals">
      <h1>${meal.strMeal}</h1>
      <h2>${meal.strArea}</h2>
      <p><img src=${meal.strMealThumb}></p>
      <ul>${meal.ingrStorage}</ul>
      <p><span>Instructions:</span><br> ${meal.strInstructions}</p>
      <p><a href="${meal.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
      </div>
      `
  );
};

ingredient.addEventListener("input", (event) => {
  choice = event.target.value;
  getMeal();
});
