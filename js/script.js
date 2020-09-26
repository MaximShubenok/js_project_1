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

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);