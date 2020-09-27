"use strict";

let numberOfFilms;
// Перед функцией ставим + т.кю мы понимаем, что мы будем работать с цифрами

function start() {
    numberOfFilms = +prompt("Сколько фильмоы вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмоы вы уже посмотрели?", "");
    }
}

// isNan() когда пользователь ввёл не число

start();

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
    
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (PersonalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (PersonalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(PersonalMovieDB);
    }
}

showMyDB(PersonalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        // PersonalMovieDB.genres[i - 1] = genre;
        PersonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
        // Сокращаем функцию, сразу записывая в массив значение из вопроса
    }
}
// Чтобы число заработало нужно использовать Бэктики(косые кавычки)

writeYourGenres();