import axios from 'axios'

const { NEXT_PUBLIC_API } = process.env

export const POKEMONS_API = axios.create({
  baseURL: NEXT_PUBLIC_API
})

export const pokeTypeColor = {
  steel: '#CCCCCC',
  water: '#B0E2FF',
  bug: '#99CC33',
  dragon: '#AB82FF',
  electric: '#FFD700',
  ghost: '#778899',
  fire: '#FF7F00',
  fairy: '#FFB0FF',
  ice: '#ADD8E6',
  fighting: '#FF6A6A',
  normal: '#DDCCAA',
  grass: '#99FF66',
  psychic: '#FFB5C5',
  rock: '#CD853F',
  dark: '#A9A9A9',
  ground: '#DEB887',
  poison: '#CC88BB',
  flying: '#BAAAFF'
}

/*
Tipo acero	#CCCCCC	rgb(168,168,192)
Tipo agua	#B0E2FF	rgb(56,153,248)
Tipo bicho	#99CC33	rgb(168,184,32)
Tipo dragón	#AB82FF	rgb(160,80,56)
Tipo eléctrico	#FFD700	rgb(248,208,48)
Tipo fantasma	#778899	rgb(96,96,176)
Tipo fuego	#FF7F00	rgb(240,80,48)
Tipo hada	#FFB0FF	rgb(231,159,231)
Tipo hielo	#ADD8E6	rgb(88,200,224)
Tipo lucha	#FF6A6A	rgb(160,80,56)
Tipo normal	#DDCCAA	rgb(168,160,144)
Tipo planta	#99FF66	rgb(120,200,80)
Tipo psíquico	#FFB5C5	rgb(248,112,160)
Tipo roca	#CD853F	rgb(184,160,88)
Tipo siniestro	#A9A9A9	rgb(122,88,72)
Tipo tierra	#DEB887	rgb(234,214,164)
Tipo veneno	#CC88BB	rgb(176,88,160)
Tipo volador	#BAAAFF	rgb(152,168,240)
*/
