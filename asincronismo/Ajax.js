

// objeto XMLHttpRequest 



(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', (e) => {

        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('exito')

            let data = JSON.parse(xhr.responseText)
            // console.log(data)

            data.forEach(({ email, name, phone }) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${name} ---- ${email}-----${phone}`
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);

        } else {
            console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

    })


    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
})();



// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((res) => {
//         return res.json()
//     }).then(va => {
//         console.log(va)
//     })
//     .catch(err => console.error(`ha sucedido un error ${err.status}, message ${err.statusText}`))









/*
const getData = async () => {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon')
    console.log(data);
    let json = await data.json();
    let pokemons = await json.results;
    console.log(pokemons)
}
getData()
*/


(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    //fetch("assets/users.json")
    fetch("https://jsonplaceholder.typicode.com/users")
        /* .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
          }) */
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            // console.log(json);
            //$fetch.innerHTML = json;
            json.forEach((el) => {
                const $li = document.createElement("li");
             $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            console.log(
                "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
            );
        });

})();





(() => {

    // fetch con funciones async
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();

            if (!res.ok) throw { status: res.status, statusText: res.statusText }

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (err) {

            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }
        finally {
            console.log("Esto se ejecutará independientemente del try... catch");
        }

    }
    getData();

})();


(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            let json = res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);

        })
        .catch(err => {
            console.log(err.response)
            let message = err.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })

        .finally()

})();


(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();
    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            console.log(res, json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();

})();