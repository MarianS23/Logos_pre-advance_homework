const modal = document.getElementById("myModal");
const moreDetails = document.querySelectorAll(".more-details")
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const wrapper = document.querySelector(".wrapper");




//очищає поле введення та wrapper
searchInput.addEventListener('input',()=>{wrapper.innerHTML= ''})

//активує кнопку пошуку
searchBtn.addEventListener("click", () => {
    getData();
    
})


//відкриває модальне вікно
window.addEventListener("click", function (event) {
    if (event.target.className === "more-details") {
        modal.style.display = "block";
        setModalData(event.target.parentElement.id);
        console.log(event.target.parentElement.id);
        
    }
})



window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.innerHTML = '';
    }
}

const setModalData = async(id)=>{
    const response = await fetch('https://www.omdbapi.com/?i='+id+'&apikey=5f8f002b');
    let data = await response.json();
    console.log(data)
    renderModal(data.Poster,data.Title,data.Genre,data.Plot,data.Writer,data.Director,data.Actors,data.BoxOffice,data.Awards,data.imdbRating)
    
}

function renderModal(poster,title,shortInfo,plot,written,directed,starring,boxoffice,awards,rating){
    let newModal = document.createElement('div');
    newModal.className = 'modal-content';
    newModal.innerHTML = `
    <div class="big-poster" style="background-image: url(${poster})"></div>
        <div class="movie-info">
             <div class="title">
                        <h1>${title}</h1>
            </div>
            <div class="short-info">
                        <p>${shortInfo}</p>
            </div>
            <div class="movie-plot">
                 <p>${plot}</p>
            </div>
            <ul class="additional-info">
                <li class="addIn">Written by:</li><span class="setAddInfo">${written}</span>
                <li class="addIn">Directed by:</li><span class="setAddInfo">${directed}</span>
                <li class="addIn">Starring:</li><span class="setAddInfo">${starring}</span>
                <li class="addIn">BoxOffice:</li><span class="setAddInfo">${boxoffice}</span>
                <li class="addIn">Awards:</li><span class="setAddInfo">${awards}</span>
                <li class="addIn">Ratings:</li><span class="setAddInfo">${rating}</span>
            </ul>
        </div>`
    modal.append(newModal)

}



//стягує інформацію з ресурсу
const getData = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=5f8f002b&s='+searchInput.value);
    // const response = await fetch('http://www.omdbapi.com/?apikey=5f8f002b&s=Superman&page=2');

    let data = await response.json();
    
    for(let i = 0;i<data.Search.length;i++){
        renderBoxes(data.Search[i].imdbID,data.Search[i].Poster, data.Search[i].Title, data.Search[i].Type, data.Search[i].Year)
    }    
    console.log(data)
}







function renderBoxes(imdbID,poster, name, type, year) {
    let box = document.createElement('div');
    box.className = 'info-box';
    box.setAttribute('id',imdbID);
    box.innerHTML = `
    <div class="poster" style="background-image: url(${poster})"></div>
    <div class="movie-name">
        <h1>${name}</h1>
    </div>
    <div class="type">
        <h3>${type}</h3>
    </div>
    <div class="prod-year">
        <h3>${year}</h3>
    </div>
    <input type="button" value="more details" class="more-details">
    `
    wrapper.append(box);

};


