document.addEventListener('DOMContentLoaded', () => {

    function calcularArea(n, v) { //n: numero ingresado, v: valor conocido
        let a;
        switch(v){
            case 'radio':
                a = Math.PI * Math.pow(n, 2);
                break;
            case 'diametro':
                a = Math.PI * Math.pow(n, 2) / 4;
                break;
            case 'longitud':
                a = Math.pow(n, 2) / (4 * Math.PI);
                break;
        }
        return a;
    }

    let form = document.querySelector('form'),
    valorConocido = document.querySelector('#valorConocido'),
    numero = document.querySelector('#numero'),
    unidades = document.querySelector('#unidades'),
    resultado = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //primero validamos que se haya ingresado un numero
        if(numero.value == "" || isNaN(numero.value) ){
            Swal.fire({
                title: 'Debes ingresar un número',
                showConfirmButton: false,
                icon: 'error',
                timer: 1000,
            })
        } else{
        resultado = calcularArea(numero.value, valorConocido.value);
        document.querySelector('#resultado').innerHTML = `${resultado.toFixed(2)} ${unidades.value}²`;
        }
    });

    
    
});