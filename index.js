document.addEventListener('DOMContentLoaded', function() {
  function renderMovies(movieData) {
    let renameThis = ''
    for (i = 0; i < movieData.length; i++) {
      renameThis += `
	<div class="movie"><img class="poster" src="${movieData[i].Poster}"/>
	<h1>${movieData[i].Title}</h1>
    <span class="date">${movieData[i].Year}</span>
    <br>
    <button type="button" onclick="function saveToWatchlist(${movieData.imbdID}) {}">Add to Favorites</button>
	</div>`
    } return renameThis
  } console.log(renderMovies(movieData))

  function saveToWatchlist(imdbID) {
    var movie = movieData.find(function (currentMovie) {
      return currentMovie.imdbID == imdbID
    })
    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)
    if (watchlist === null) {
      watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)

  } 

  let content = document.querySelector('.movies-container')

  document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault()
    content.innerHTML = renderMovies(movieData)
  })

})
