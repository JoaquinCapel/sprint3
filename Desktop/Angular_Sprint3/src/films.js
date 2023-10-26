// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(x => x.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const filtroDirector = [];
  // El operador lógico && en este caso no comprueba que las 2 condiciones sean true, comprueba que x.director sea igual a nombre y entonces ejecuta el push.
  const result = array.filter(x => x.director === director && filtroDirector.push(x.title));
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const result = array.filter(x => x.director === director);
  const total = result.reduce((sum, pelicula) => sum + pelicula.score, 0);
  const average = (total / result.length.toFixed(2));
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array.map(x => x.title)
    .sort()
    .slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const result = [...array];

  result.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,category) {

  const filteredMovies = array.filter(movie => movie.genre.includes(category));
  const total = filteredMovies.reduce((sum, pelicula) => sum + pelicula.score, 0);
  const average = (total / filteredMovies.length).toFixed(2);
  return parseFloat(average);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // Crear una copia de movies para no modificar el original
  const result = array.map(movie => ({ ...movie }));

  // Iteración sobre las películas y conversión a minutos
  result.forEach(movie => {
    const durationParts = movie.duration.split(' ');
    let totalMinutes = 0;

    for (const part of durationParts) {
      if (part.includes('h')) {
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        totalMinutes += parseInt(part);
      }
    }

    movie.duration = totalMinutes; // Actualiza el resultado a minutos
  });

  return result;
}

// Exercise 8: Get the best film of a year
// function bestFilmOfYear(movies, year) {
//   const moviesOfYear = movies.filter(movie => movie.year === year);

//   const bestScore = Math.max(...moviesOfYear.map(movie => movie.score));
//   const bestMovie = moviesOfYear.find(movie => movie.score === bestScore);

//   // Devolver la película con la puntuación más alta (puede haber varias si tienen la misma puntuación)
//   return moviesOfYear.filter(movie => movie.score === bestScore);
// }

function bestFilmOfYear(movies, year) {
  // Filtrar las películas que tienen el año especificado
  const moviesOfYear = movies.filter(movie => movie.year === year);

  if (moviesOfYear.length === 0) {
    return [];
  }

  // Inicializar bestScore. Permite identificar si no se ha encontrado una puntuación válida y también evita cualquier confusión con valores negativos de puntuación.
  let bestScore = null;
  let bestMovies = [];

  moviesOfYear.forEach(movie => {
    if (bestScore === null || movie.score > bestScore) {
      bestScore = movie.score;
      bestMovies = [movie];
    } else if (movie.score === bestScore) {
      bestMovies.push(movie);
    }
  });

  return bestMovies;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
