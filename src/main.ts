interface Grupo {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
}

const PopRock: string = "🎵Pop Rock";
const Rock: string = "🎸Rock";
const hardRock: string = "🤘Hard Rock";
const clasica: string = "🎼Clásica";

const Grupo1: Grupo = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: PopRock,
};

const Grupo2: Grupo = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: Rock,
};

const Grupo3: Grupo = {
  nombre: "AC/DC",
  año: 1973,
  activo: true,
  genero: hardRock,
};

const Grupo4: Grupo = {
  nombre: "Beethoven",
  año: 1970,
  activo: false,
  genero: clasica,
};

const Grupo5: Grupo = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: Rock,
};

console.log(
  `El grupo %c${Grupo1.nombre}%c, apareció desde ${Grupo1.año}, con el género ${Grupo1.genero}, y su estado de actividad es ${Grupo1.activo}`,
  "background: green; font-weight: bold; font-size: 16px",
  ""
);

console.log(
    `El grupo %c${Grupo2.nombre}%c, apareció desde ${Grupo2.año}, con el género ${Grupo2.genero}, y su estado de actividad es ${Grupo2.activo}`,
    "background: green; font-weight: bold; font-size: 16px",
    ""
  );

  console.log(
    `El grupo %c${Grupo3.nombre}%c, apareció desde ${Grupo3.año}, con el género ${Grupo3.genero}, y su estado de actividad es ${Grupo3.activo}`,
    "background: green; font-weight: bold; font-size: 16px",
    ""
  );

  console.log(
    `El grupo %c${Grupo4.nombre}%c, apareció desde ${Grupo4.año}, con el género ${Grupo4.genero}, y su estado de actividad es ${Grupo4.activo}`,
    "background: green; font-weight: bold; font-size: 16px",
    ""
  );

  console.log(
    `El grupo %c${Grupo5.nombre}%c, apareció desde ${Grupo5.año}, con el género ${Grupo5.genero}, y su estado de actividad es ${Grupo5.activo}`,
    "background: green; font-weight: bold; font-size: 16px",
    ""
  );