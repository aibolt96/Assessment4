const baseUrl = `http://localhost:4000`;
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const magicQuestion = document.querySelector("#magic-question")
const magicAnswerDisplay = document.querySelector('#magic-answer-display')
const addMovieButton = document.querySelector("#addMovieButton")
const editMovieButton = document.querySelector("#editMovieButton")
const addMovie = document.querySelector("#newMovie")
const addChar = document.querySelector("#newChar")
const editMovie = document.querySelector("#edit-movie")
const movieId = document.querySelector("#movieId")
const updateMovie = document.querySelector("#updateMovie")
const updateChar = document.querySelector("#updateChar")

const deleteMovie = (id) => {
    axios
        .delete(`${baseUrl}/api/movie/${id}`)
        .then((res) => movieDisplay(res.data))
        .catch((err) => console.log(err));
};

movieDisplay = (movieArray) => {
    movieInfo.innerHTML = ``;
    movieArray.map((movie) => {
        const movieInformation = document.createElement("div");
        movieInformation.innerHTML = `
            <ul>
            <li> Id: ${movie.movieId}</li>
            <li> Movie Name: ${movie.movieName}</li>    
            <li> Favorite Character: ${movie.charName}</li>
            <button onclick="deleteMovie(${movie.movieId})"> Remove Movie </button>
            </ul>    
        `;
    movieInfo.appendChild(movieInformation);
    });
};

const getMovie =() => {
    axios
        .get(`${baseUrl}/api/movie`)
        .then((res) => {
            movieDisplay(res.data)
        })
        .catch((err) => console.log(err));
}

const addMovies = (event) => {
    event.preventDefault();
    const movieBody = {
        movieName: newMovie.value,
        charName: newChar.value,
    };
    axios
    .post(`${baseUrl}/api/movie`, null, {params: movieBody})
    .then((res) => movieDisplay(res.data))
    .catch((err) => console.log(err));
    newMovie.value= '';
    newChar.value= '';
};

const editMovies = (event) => {
    event.preventDefault();
    axios
    .put(`${baseUrl}/api/movie/${movieId.value}?newMovieName=${updateMovie.value}&newCharName=${updateChar.value}`)
    .then((res) => movieDisplay(res.data))
    .catch((err) => console.log(err))
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseUrl}/api/fortune/`)
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

const getMagicEight = () => {
    axios.get(`${baseUrl}/api/magicAnswer/`)
        .then(res => {
            const data = res.data;
            magicAnswerDisplay.textContent = data;
            magicQuestion.value = '';
            // alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
magicQuestion.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        event.preventDefault()
        getMagicEight()
    }
})

document.addEventListener("DOMContentLoaded", getMovie)
addMovieButton.addEventListener('click', addMovies)
editMovieButton.addEventListener('click', editMovies)
addMovie.addEventListener('submit', addMovies)
editMovie.addEventListener('submit', editMovies)