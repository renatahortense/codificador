let escolha = document.querySelector('#base64');
let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');
let input = document.querySelector('#texto');
let output = document.querySelector('#texto2');
let button = document.querySelector('#enviar');
let chave = document.querySelector('#chave');

button.addEventListener('click',()=>{
    if (escolha.selected && codificar.checked){
        output.value=btoa(input.value);
        console.log("Jesus");        
    } 
    else if (escolha.selected && decodificar.checked){
                output.value=atob(input.value);
            }
       
    else if(!escolha.selected && codificar.checked){
        function cesar1 (str, chave){
            var primeira ="";
            for (var i=0; i<str.length; i++){
                var numasc = str[i].charCodeAt ();
                if (numasc >= 97 && numasc<=122) {
                    if (numasc+chave>122){
                        primeira += String.fromCharCode(numasc + chave-26);
                    }
                    else {
                        primeira += String.fromCharCode(numasc + chave);
                    }
                }
            }
            return primeira
        }
        output.value = cesar1 (input.value, parseInt(chave.value))
    }

        else if (!escolha.selected && !codificar.selected){
            console.log("JC")
            function cesar1 (str, chave){
                var primeira ="";
                for (var i=0; i<str.length; i++){
                    var numasc = str[i].charCodeAt ();
                    
                    if (numasc >= 97 && numasc<=122) {
                        if (numasc-chave<97){
                            primeira += String.fromCharCode(numasc - chave+26);
                        }
                        else {
                            primeira += String.fromCharCode(numasc - chave);
                        }
                    
                    }
                }
                return primeira
            }
            output.value = cesar1 (input.value, parseInt(chave.value))
        }
    
})


