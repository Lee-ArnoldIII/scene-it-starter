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
  }

  