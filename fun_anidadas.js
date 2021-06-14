function global(c) {
    if (!c) {
        let b = 'julian';
        function local() {
            let c = 'andres';
            function apellido1() {
                let d = 'calambas';
                return b + c + d;
            }
            return apellido1;
        }

        return local;
    }

    return 'ingresa valores';
}


let mostrar = global(false)()();
console.log(mostrar);

