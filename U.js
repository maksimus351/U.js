// Отримуємо фільми з uakino.me
function getMoviesFromUakino() {
    const url = "https://uakino.me/";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let movies = [];
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const movieTitles = doc.querySelectorAll('h2.entry-title');
            movieTitles.forEach(title => {
                movies.push(title.innerText);
            });
            displayMovies(movies);
        })
        .catch(err => console.error("Failed to fetch movies from uakino.me", err));
}

// Отримуємо фільми з rezka-ua.org
function getMoviesFromRezka() {
    const url = "https://rezka-ua.org/";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let movies = [];
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const movieTitles = doc.querySelectorAll('a.b-post__title');
            movieTitles.forEach(title => {
                movies.push(title.innerText);
            });
            displayMovies(movies);
        })
        .catch(err => console.error("Failed to fetch movies from rezka-ua.org", err));
}

// Виводимо список фільмів
function displayMovies(movies) {
    if (movies.length > 0) {
        let movieList = "Available Movies:\n";
        movies.forEach((movie, index) => {
            movieList += `${index + 1}. ${movie}\n`;
        });
        alert(movieList); // Ви можете замінити alert на інший спосіб виведення на екран
    } else {
        alert("No movies found.");
    }
}

// Вибір джерела
function chooseSource() {
    const choice = prompt("Select the source for movies:\n1. uakino.me\n2. rezka-ua.org\nEnter 1 or 2:");

    if (choice === "1") {
        getMoviesFromUakino();
    } else if (choice === "2") {
        getMoviesFromRezka();
    } else {
        alert("Invalid choice. Please select 1 or 2.");
    }
}

// Викликаємо функцію вибору джерела
chooseSource();
