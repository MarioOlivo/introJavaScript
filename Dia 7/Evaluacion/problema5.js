/**
### Problema 5:

De la siguiente estructura de datos, contesta las siguientes preguntas 
creando un programa para cada una.

```jsx
let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]
```

1. Retorna en un array las calificaciones de todos los estudiantes.
2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 

```jsx
[
  { 
    "Jorge": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
]
```

1. Retorna la calificación mas baja
2. Retorna la calificación mas alta */

let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

let estudiantes =[]
let calificacionesmat=[]
 info.forEach(element => {
    const initialValue=0
   let materias = element.materias
   let totalcal = materias.map(mat=>mat.calificacion)
   calificacionesmat.push(totalcal)
   let prom =totalcal.reduce((v1,v2)=> v1+v2,initialValue);
   let promedio = prom/(totalcal.length)

    let estudiante={[element.nombre]:{
        promedio:promedio}
    }
    estudiantes.push(estudiante)
});
console.log(estudiantes);
console.log(calificacionesmat);

let cal=[]
for (let i = 0; i < calificacionesmat.length; i++) {
     calificacionesmat[i].forEach(row => {
        cal.push(row)
      //  console.log(row);
    })
    
    
}
let calis=cal.sort(function(a, b) {return a - b})

console.log(calis[0]);
console.log(calis[calis.length-1]);