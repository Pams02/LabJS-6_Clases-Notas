class Alumno{
    codigo;
    nombre;
    nota1;
    nota2;
    nota3;
    nota4;

    constructor(codigo,nombre,nota1,nota2,nota3){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    
    promedio(){
        return (this.nota1*15)/100 + (this.nota2*20)/100 + (this.nota3*25)/100 + (this.nota4*45)/100
    }
    
    condicion() {
        if(12<=this.promedio()) 
        return "Aprobado";
        return 'Desaprobado'
    }

    obsequio() {
        if(17<this.promedio()) return 'Ganaste una mochila';
        return '';
    }
    
}

$(document).ready(function() {
    $('#miFormulario').submit(function(e) {
        e.preventDefault();

        $('.error').text('');

        const alum1= new Alumno();
        
        alum1.codigo = $('#codigo').val();
        alum1.nombre = $('#nombre').val();
        alum1.nota1 = parseFloat($('#nota1').val());
        alum1.nota2 = parseFloat($('#nota2').val());
        alum1.nota3 = parseFloat($('#nota3').val());
        alum1.nota4 = parseFloat($('#nota4').val());
        
        if (alum1.nota1 < 0 || alum1.nota1 > 20 || isNaN(alum1.nota1)) {
            $('#nota1Error').text('La nota debe estar entre 0 y 20');
            return;
        }
        if (alum1.nota2 < 0 || alum1.nota2 > 20 || isNaN(alum1.nota2)) {
            $('#nota2Error').text('La nota debe estar entre 0 y 20');
            return;
        }
        if (alum1.nota3 < 0 || alum1.nota3 > 20 || isNaN(alum1.nota3)) {
            $('#nota3Error').text('La nota debe estar entre 0 y 20');
            return;
        }
        if (alum1.nota4 < 0 || alum1.nota4 > 20 || isNaN(alum1.nota4)) {
            $('#nota4Error').text('La nota debe estar entre 0 y 20');
            return;
        }

        let promedio = alum1.promedio().toFixed(2);
        let condicion = alum1.condicion();
        let obsequio = alum1.obsequio();

        alert(`Promedio: ${promedio}\nCondición: ${condicion}\nObsequio: ${obsequio}`);

        
        console.log(`Promedio: ${promedio}\nCondición: ${condicion}\nObsequio: ${obsequio}`);
    });
});