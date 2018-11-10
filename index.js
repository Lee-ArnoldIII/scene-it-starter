document.addEventListener('DOMContentLoaded', function() {
function renderMovies(movieData) {
    let renameThis = ''
    for (i=0; i < movieData.length; i++) {
	renameThis += `
	<div class="movie"><img class="poster" src="${movieData[i].Poster}"/>
	<h1>${movieData[i].Title}</h1>
    <span class="date">${movieData[i].Year}</span>
    <br>
    <button type="button">Add to Favorites</button>
	</div>`
	} return renameThis
} console.log(renderMovies(movieData))

let content = document.querySelector('.movies-container')

content.innerHTML = renderMovies(movieData)})
