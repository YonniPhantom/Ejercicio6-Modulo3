function sortDescending() {
    const numbers = document.getElementById('numbers').value.split(',').map(item => parseInt(item.trim()));
    const sortedNumbers = numbers.sort((a, b) => b - a);
    displayOutput(sortedNumbers);
}

function sortCharsByAscii() {
    const chars = document.getElementById('chars').value.split(',').map(item => item.trim());
    const sortedChars = chars.sort();
    displayOutput(sortedChars);
}

class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    getPromedio() {
        const sum = this.calificaciones.reduce((total, current) => total + current, 0);
        return sum / this.calificaciones.length;
    }
}

class Salon {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarPorPromedio() {
        return this.alumnos.sort((a, b) => b.getPromedio() - a.getPromedio());
    }
}

function sortStudentsByAverage() {
    const alumno1 = new Alumno('Juan', [80, 90, 85, 88, 92]);
    const alumno2 = new Alumno('María', [70, 85, 90, 75, 82]);
    const alumno3 = new Alumno('Pedro', [95, 88, 92, 87, 90]);

    const salon = new Salon();
    salon.agregarAlumno(alumno1);
    salon.agregarAlumno(alumno2);
    salon.agregarAlumno(alumno3);

    const sortedAlumnos = salon.ordenarPorPromedio();
    displayOutput(sortedAlumnos.map(alumno => alumno.nombre));
}

function sortByWordLength() {
    const words = document.getElementById('words').value.split(',').map(item => item.trim());
    const sortedWords = words.sort((a, b) => a.length - b.length);
    displayOutput(sortedWords);
}

function sortByDistance() {
    const coordinates = document.getElementById('coordinates').value.split('|').map(item => item.split(',').map(Number));
    const sortedCoordinates = coordinates.sort((a, b) => {
        const distanceA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
        const distanceB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
        return distanceA - distanceB;
    });
    displayOutput(sortedCoordinates);
}

function displayOutput(result) {
    document.getElementById('output').innerText = Array.isArray(result) ? JSON.stringify(result) : result;
}
