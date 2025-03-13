interface Grupo {
    nombre: string,
    año: number,
    activo: boolean,
    genero: string
}

const PopRock: string = '🎵Pop Rock'
const Rock: string = '🎸Rock'
const hardRock: string = '🤘Hard Rock'
const clasica: string = '🎼Clásica'

const Grupo1: Grupo = {
    nombre: 'The Beatles',
    año: 1960,
    activo: true,
    genero: PopRock
}

const Grupo2: Grupo = {
    nombre: 'Queen',
    año: 1970,
    activo: false,
    genero: Rock
}

const Grupo3: Grupo = {
    nombre: 'AC/DC',
    año: 1973,
    activo: true,
    genero: hardRock
}

const Grupo4: Grupo = {
    nombre: 'Beethoven',
    año: 1970,
    activo: false,
    genero: clasica
}

const Grupo5: Grupo = {
    nombre: 'The Rolling Stones',
    año: 1962,
    activo: true,
    genero: Rock
}

console.log(Grupo1)
