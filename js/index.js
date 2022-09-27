// JSON.parse(JSON.stringify(pokemons));
// // console.log(pokemons);

var elCardsWrapper = newFunc(".card-wrapper");

pokemons.forEach(function (pokemon) {
  var newLi = createElement("li", "pokemon-card", "");
  var newImg = createElement("img", "card-img", "");

  newImg.setAttribute("src", pokemon.img);

  var newElP = createElement('h2', 'pokemon-name', pokemon.name);
  var newElType = createElement('p', 'pokemon-type', pokemon.type);
  var newNum = createElement('p', 'pokemon-num', pokemon.num);
  var newData = createElement('data', 'pokemon-data', pokemon.spawn_time);

  newLi.appendChild(newNum);
  newLi.appendChild(newElP);
  newLi.appendChild(newImg);
  newLi.appendChild(newElType);
  newLi.appendChild(newData);
  elCardsWrapper.appendChild(newLi);

})