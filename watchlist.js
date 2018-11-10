document.addEventListener('DOMContentLoaded', function() {
  localStorage.getItem('watchlist')  
  
  function renderMovies(movieData) {
        let renameThis = ''
        for (i = 0; i < movieData.length; i++) {
          renameThis += `
        <div class="movie"><img class="poster" src="${movieData[i].Poster}"/>
        <h1>${movieData[i].Title}</h1>
        <span class="date">${movieData[i].Year}</span>
        </div>`
        } return renameThis
        let content = document.querySelector('.movie-container')
        content.innerHTML = renderMovies(movieData)
      } 
})
