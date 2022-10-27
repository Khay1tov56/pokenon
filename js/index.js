let elList = document.querySelector(".card-wrapper");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elSelect = document.querySelector(".select");
let elSortSelect = document.querySelector(".genres-select");
const genres = [];



function createList(pokes, mark) {
  elList.innerHTML = "";


  let newFragment = document.createDocumentFragment();
  for (let poke of pokes) {
    let newItem = document.createElement("li");
    let newImg = document.createElement("img");
    let newText = document.createElement("p")
    let newSpan = document.createElement("span")
    newImg.src = poke.img;
    newText.textContent = poke.name;
    newSpan.textContent = poke.weight;
    newItem.appendChild(newImg);
    newItem.appendChild(newText);
    newItem.appendChild(newSpan);
    newFragment.appendChild(newItem);

  }
  elList.appendChild(newFragment);

}

// Search qiluvchi funksiya
function filreterdFn(arr) {
  return pokemons.filter(item => item.name.match(arr))
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let searchElement = new RegExp(elInput.value, "gi");
  let absd = filreterdFn(searchElement);
  
  if (absd.length > 0) {
    sorting(absd, elSelect.value);
    pokeKg(absd, elSelect.value);
    createList(absd);
  
  } else {
    alert("Movie not found");
  }
  
})
createList(pokemons);
elInput.value = "";

// Sort qiluvchi fn

function sorting(item, type) {
  if (type === "aazz") {
    item.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
  } else if (type === "zzaa") {
    item.sort((a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0));

  }
};

function pokeKg (item, kg) {
  if(Number(kg === "kgstart")) {
    item.sort((a, b) => a.weight.charCodeAt(0) - b.weight.charCodeAt(0));
  } else if (Number(kg === "kgend")) {
    item.sort((a, b) => b.weight.charCodeAt(0) - a.weight.charCodeAt(0))
  }
}

sorting()
pokeKg()


function genresList() {

  pokemons.forEach(film => {
    const genresMovies = film.weaknesses;

    genresMovies.forEach(category => {
      if (!genres.includes(category)) {
        genres.push(category);
      }
    });
  });
  genres.sort();
}

function showMoviesGenresOption() {

  const newSelectFragment = document.createDocumentFragment();

  genres.forEach(genre => {

    const newMoviesOption = document.createElement("option");

    newMoviesOption.textContent = genre;
    newMoviesOption.value = genre;
    newSelectFragment.appendChild(newMoviesOption);
  });
  elSortSelect.appendChild(newSelectFragment);
}

function showSearchMovies(items) {

  return pokemons.filter(movie => {
    
    const meetsCriteria = movie.title.match(items) && elSortSelect.value === "All" ||
    movie.categories.includes(elSortSelect.value);

    return meetsCriteria;
  });
}

genresList()
showMoviesGenresOption();