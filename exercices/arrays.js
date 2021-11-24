



//creando un array de objetos con el nombre de la ciudad y la cantidad de veces que se repite

let capitalCountries = [
    'bogota',
    'bogota',
    'brasilia',
    'tokio',
    'bogota',
    'tokio',
    'brasilia',
    'brasilia',
    'brasilia',
    'brasilia',
    'brasilia',
    'caracas',
    'tokio',
    'dubai',

    'caracas',
    'washinton'
];

let countCitys = maxCitys => {
    let cities = {};
    capitalCountries.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1;
    })
    return Object.keys(cities)
        .map(city => ({ name: city, times: cities[city] }))
        .sort((a, b) => b.times - a.times)
        .slice(0, maxCitys)

}

// console.log(countCitys(3));

function ciudades() {
    let cities = {};
    capitalCountries.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1;
    })

    let valores = Object.keys(cities)
        .map(city => { return { name: city, times: cities[city] } })
        .sort((a, b) => { return b.times - a.times })

    console.log(valores);
}

ciudades();






