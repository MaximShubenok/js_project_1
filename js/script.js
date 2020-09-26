"use strict";

const numberOfFilms = +prompt("Сколько фильмоы вы уже посмотрели?", "");
// Перед функцией ставим + т.кю мы понимаем, что мы будем работать с цифрами

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



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

console.log(PersonalMovieDB);

if (PersonalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (PersonalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}