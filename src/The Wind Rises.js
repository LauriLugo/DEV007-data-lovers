// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[17].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[17].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[17].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[17].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[17].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('naoko'); 
personajes.src = listaPeliculas[17].people[0].img; 
personajes = document.getElementById('nombreNaoko'); 
personajes.innerHTML = listaPeliculas[17].people[0].name;
   
personajes = document.getElementById('jiro'); 
personajes.src = listaPeliculas[17].people[1].img; 
personajes = document.getElementById('nombreJiro'); 
personajes.innerHTML = listaPeliculas[17].people[1].name;

personajes = document.getElementById('castorp'); 
personajes.src = listaPeliculas[17].people[2].img; 
personajes = document.getElementById('nombreCastorp'); 
personajes.innerHTML = listaPeliculas[17].people[2].name;

personajes = document.getElementById('kiro'); 
personajes.src = listaPeliculas[17].people[3].img; 
personajes = document.getElementById('nombreKiro'); 
personajes.innerHTML = listaPeliculas[17].people[3].name;

personajes = document.getElementById('caproni'); 
personajes.src = listaPeliculas[17].people[5].img; 
personajes = document.getElementById('nombreCaproni'); 
personajes.innerHTML = listaPeliculas[17].people[5].name;

personajes = document.getElementById('kurokawa'); 
personajes.src = listaPeliculas[17].people[6].img; 
personajes = document.getElementById('nombreKurokawa'); 
personajes.innerHTML = listaPeliculas[17].people[6].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[17].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[17].producer;  

