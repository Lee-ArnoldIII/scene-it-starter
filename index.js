document.addEventListener('DOMContentLoaded', function () {

  function createSingleMovie (movie) {
    return `<div class="movie"><img class="poster" src="${movie.Poster}"/>
      <h1>${movie.Title}</h1>
      <span class="date">${movie.Year}</span>
      <br>
      <button type="button" onclick="function saveToWatchlist(${movie.imdbID}) {}">Add Movie</button>
    </div>`
  }
  
  // what is the return value of this function?
  function renderMovies (movieData) {
    const moviesHTMLArray = movieData.map(createSingleMovie)
    const moviesHTML = moviesHTMLArray.join('')

    // let moviesHTML = movieData.map(createSingleMovie).join('')

    // TODO: return something here?
    return moviesHTML
  }

  function saveToWatchList (imdbID) {
    let movie = movieData.find(function (currentMovie){
      return currentMovie.imdbID == imdbID
    })
    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)
    if(watchlist = null) {
      return watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
  }

  let content = document.querySelector('.movies-container')

  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    content.innerHTML = renderMovies(movieData)
  })
})
