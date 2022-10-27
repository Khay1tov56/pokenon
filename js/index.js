let elList = document.querySelector(".card-wrapper");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elSelect = document.querySelector(".select");
let elSortSelect = document.querySelector(".genres-select");
const genres = [];


// Arrayga oid genres
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

function createList(pokes) {
  elList.innerHTML = "";


  let newFragment = document.createDocumentFragment();
  for (let poke of pokes) {
    let newItem = document.createElement("li");
    newItem.classList.add("col-3", "bg-secondary","text-white", "my-5", "py-4")
    let newData = document.createElement("p");
    let newImg = document.createElement("img");
    let newText = document.createElement("h3");
    let newSpan = document.createElement("span");
    let newCandy = document.createElement("p");
    newImg.src = poke.img;
    newText.textContent = poke.name;
    newSpan.textContent = poke.weight;
    newData.textContent = poke.height;
    newCandy.textContent = poke.weaknesses;
    newItem.appendChild(newImg);
    newItem.appendChild(newText);
    newItem.appendChild(newData);
    newItem.appendChild(newSpan);
    newItem.appendChild(newCandy);
    newFragment.appendChild(newItem);

  }
  elList.appendChild(newFragment);

}

function showSearchMovies(items) {

  return pokemons.filter(movie => {
    
    const meetsCriteria = movie.name.match(items) && (elSortSelect.value === "All" ||
    movie.weaknesses.includes(elSortSelect.value));

    return meetsCriteria;
  });
}

function sortingAll(sortedList, select) {
  if (select === "aazz") {
    sortedList.sort((a,b) => a.name.localeCompare(b.name))
  }else if(select === "zzaa") {
    sortedList.sort((a,b) => b.name.localeCompare(a.name))

  }else if (select === "kgstart") {
    sortedList.sort((a,b) => a.weight.localeCompare(b.weight))

  }else if (select === "kgend") {
    sortedList.sort((a,b) => b.weight.localeCompare(a.weight))
  }else if (select === "hgstart") {
    sortedList.sort((a,b) => a.height.localeCompare(b.height))
  }else if (select === "hgend") {
    sortedList.sort((a,b) => b.height.localeCompare(a.height))
  }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let searchElement = new RegExp(elInput.value, "gi");
  let absd = showSearchMovies(searchElement);
  
  if (absd.length > 0) {
    sortingAll(absd, elSelect.value);
    createList(absd);
  } else {
    alert("Movie not found");
  }
  
})
createList(pokemons);
elInput.value = "";

sortingAll()
genresList()
showMoviesGenresOption()

