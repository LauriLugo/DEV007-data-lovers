// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[4].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[4].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[4].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[4].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[4].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('taeko'); 
personajes.src = listaPeliculas[4].people[0].img; 
personajes = document.getElementById('nombreTaeko'); 
personajes.innerHTML = listaPeliculas[4].people[0].name;
   
personajes = document.getElementById('toshio'); 
personajes.src = listaPeliculas[4].people[1].img; 
personajes = document.getElementById('nombreToshio'); 
personajes.innerHTML = listaPeliculas[4].people[1].name;

personajes = document.getElementById('nanako'); 
personajes.src = listaPeliculas[4].people[5].img; 
personajes = document.getElementById('nombreNanako'); 
personajes.innerHTML = listaPeliculas[4].people[5].name;

personajes = document.getElementById('yaeko'); 
personajes.src = listaPeliculas[4].people[6].img; 
personajes = document.getElementById('nombreYaeko'); 
personajes.innerHTML = listaPeliculas[4].people[6].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[4].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[4].producer;  

