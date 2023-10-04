//VARIABLES Y OPERACIONES ---------------------------------
    //1.Responde las siguientes preguntas en la sección de comentarios:
        //¿Qué es una variable y para qué sirve?-----> Una variable es la representacíon de un espacio en la memoria y sirve para guardar datos o valores que puedan ser usados mas adelante. Figurativamente a una variable se puede tratar como tentaculos que atrapan valores y los mantienen para que puedan ser usados. 
        //¿Cuál es la diferencia entre declarar e inicializar una variable?----->Declarar implica el hecho de asignar el nombre a la variable; La asignación del nombre se hace haciendo uso de palabras clave como: let, var o const, seguido del nombre que queremos ponerle.  En cambio inicializar una variable, ademas de darle un nombre, asigna un valor con el signo igual (=).
        // ¿Cuál es la diferencia entre sumar números y concatenar strings?----->Sumar iimplica realizar la operación matemática de adición de dos valores en cambio, contatenar une valores mas no realiza una opearción matemática. ejemplo:
        // SUMAR ------->    5+7=12
        //CONCATENAR---->    "5"+"7"=57
        //¿Qué operador permite sumar o concatenar? el operador de adición (+)    

    //2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
        //Nombre: String
        //Apellido: String
        //Nombre de usuario en Platzi:  string
        //Edad: Número
        //Correo electrónico: String
        //Mayor de edad: Boolean
        //Dinero ahorrado: Número
        //Deudas: Número

    //3.Traduce a código JS las variables del ejemplo anterior y deja tu código en los comentarios. 
        let nombre = "Kelly";
        let apellido = "Condori";
        let nombreDeUsuarioEnPlatzi="KellyC2";
        let edad="36";
        let correoElectronico="ejemplo@clase.com";
        let mayorDeEdad= edad>18?true:false;
        let dineroAhorrado= 20000;
        let deudas=5000;

    //4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior: Nombre completo (Nombre y apellido) y Dinero real(dinero ahorrado menos deudas)
    var nombreCompleto= nombre + " " + apellido;
    var dineroReal =dineroAhorrado - deudas;
    console.log(nombreCompleto);
    console.log(dineroReal);


//FUNCIONES------------------------------------------------
    //1️. Responde las siguientes preguntas en la sección de comentarios:
        //¿Qué es una función? Conjunto de sentencias que van a ejecutar o realizar una cción con las variables introducidas previamente. Es una pieza de programa envuelta en un valor. 
        //¿Cuándo me sirve usar una función en mi código? Cuando deseamos repetir una accion. En lugar de escribir el codigo cada que quiera realizar esa acción solo llamamos la función. 
        //¿Cuál es la diferencia entre parámetros y argumentos de un función? El parametro es el nombre que colocamos o aparece entre parentesis al definir una función y el argumento es el valor que colocamos entre parentesis cuando llamamos a la función. 

    //2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
        // const name = "Juan David";
        // const lastname = "Castro Gallego";
        // const completeName = name + lastname;
        // const nickname = "juandc";

        // console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

        function presentacion(name, lastName, nickname){
            const completeName=name + " "+ lastName;
            console.log("Mi nombre es  " + completeName + ",pero prefiero que me digas " + nickname + ".");
        };
        presentacion("Kelly", "Condori", "Rous");

//CONDICIONALES----------------------------------------------
    //1️ Responde las siguientes preguntas en la sección de comentarios:
        
        //¿Qué es un condicional?Es una expresion que permite evaluar o validar y puede tener dos valores: true or false. Es la forma de ejecutar un bloque de código u otro dependiendo de algauna condicíon o validación. 
        //¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? If(else,else if),  switch and el operador ternario(?). El operador ternario solo puede validar una condición.   El if(else, elseif) lo usamos para validaciones o condiciones limitadas (2 a 5), para mayor número de validaciones usamos el switch de esta forma evitamos usar if else en exceso.  La diferencia entre ellos es que con el swicth siempre hacemos la validación con de la misma o con la misma variable en cambio con el if(else, elseif) podemos validar varias variables u otra condicion. // ********El condicional if(con el else y else if) nos permiote hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.*******//         
        //¿Puedo combinar funciones y condicionales?Sí.Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales. 

    //2.  Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:        
        const tipoDeSuscripcion = "Basic";
        switch (tipoDeSuscripcion) {
        case "Free":
            console.log("Solo puedes tomar los cursos gratis");
            break;
        case "Basic":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            break;
        case "Expert":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            break;
        case "ExpertPlus":
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            break;
        }

        let tipeOfSuscription ="Basic"
        if(tipeOfSuscription=="Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }else if(tipeOfSuscription=="Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }else if (tipeOfSuscription=="Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }else if(tipeOfSuscription=="ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        } else{
            console.log ("Introduce un valor válido")
        }

    //3.  Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

            function conseguirTipoSuscripcion(tipoDeSuscripcion){
                if(tipoDeSuscripcion=="Free"){
                    console.log("Solo puedes tomar los cursos gratis");
                return;
                } 

                if(tipoDeSuscripcion=="Basic"){
                    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
                    return;
                }

                if(tipoDeSuscripcion=="Expert"){
                    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
                    return;
                }
                if(tipoDeSuscripcion="Expertplus"){
                    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                    return;
                }

                console.warm("Este tipo de suscripción no existe")
            }

            //Bonus:Si ya eres una experta o experto en el lenaguaje, te desafío a comentar cómo replizar este comportaiento con arrays y un solo condicional. 

            let tiposDeSuscripciones={
                free:"Solo puedes tomar los cursos gratis",
            Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
            Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
            ExpertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
            }
            function getSortOfSuscription(suscription){
                if(tiposDeSuscripciones[suscription]){
                    console.log(tiposDeSuscripciones[suscription]);
                    return;
                };
                
                console.warn("Esa suscripción no existe")
            }
            
               
//CICLOS---------------------------------------------------

    //1️ Responde las siguientes preguntas en la sección de comentarios:
        //¿Qué es un ciclo? Es la repetición de una instrucción o tareas de forma automática. Es la forma de ejeuctar un código hasta que se cumpla cierta condición. 
        //¿Qué tipos de ciclos existen en JavaScript? Solo conozco 2 tipos de ciclos: for y while.        
        //¿Qué es un ciclo infinito y por qué es un problema? La tarea no nunca se va a detener o se realiza de forma indefinida y representa un problema porque hace que los navegadores se detengan o cierren. 
        //¿Puedo mezclar ciclos y condicionales? Sí.Aunque los ciclos son condiconales, nada nos impide agregar mas condicionales dentro del ciclo.

    //2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
        
        //for (let i = 0; i < 5; i++) {
         //   console.log("El valor de i es: " + i);
        //}

        //for (let i = 10; i >= 2; i--) {
         //   console.log("El valor de i es: " + i);
       // }      

        let i=0
         while(i<5){
            console.log ("El valor de i es; " +i);
            i++;
        }

        let p=10
        while (p>=2) {
            console.log ("El valor de p es: " + p);
            p--;            
        }
    //3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2+2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. 
        let respuesta;
        while(respuesta!="4"){
            let pregunta=prompt("¿ Cuánto es 2+2 ?");
            respuesta=pregunta;            
        };
        alert("FELICITACIONES!");
           

//LISTAS-------------------------------------------------
    //1️ Responde las siguientes preguntas en la sección de comentarios:
        //¿Qué es un array? Es tun tipo de dato tipo objeto en el que se guarda no solo un valor sino una losta de valores. ***Es una lista de elementos". const miArray=[1, "dnfjn", true, false, 3698 ]
        //¿Qué es un objeto? Es la representaciòn virtual de un objeto fisico, el cual almacena valores(acaracteristicas o propiedades de un objeto). ***Es una lista de elemento peeeero, cada elemento tiene un nombre clave****   const obj={ tamaño: "small", edad: 56, color: "morado"}
        //¿Cuándo es mejor usar objetos o arrays?Arrays cuando lo que haremos en un elemento es los mismo que en todos los demás (la regla se puede incumplir). Mientras que objetos cuando los nombres de cada elemento son importantes para nuestro algoritimo. 
        //¿Puedo mezclar arrays con objetos o incluso objetos con arrays?Sì. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades. 

    //2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
        function mostrarPrimerElemento (miArray){
            console.log (miArray[0]);           
        }
        mostrarPrimerElemento(["Maria", "Martín", "Mariana", "Mulan"]);

    //3️ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
        function cadaUnoDeLosElementos(miArray){
            let i=0;
            while(i<miArray.length){
                console.log(miArray[i]);
                i++;
            };
        };
        cadaUnoDeLosElementos(["head","face", "ear","nose","mouth","hand","arms", "shoulder"]);
    
    //4️ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
        
      function cadaUnoDeLosObjetos(miObjeto){
        let miObjetoConvertido=Object.values(miObjeto);
        for(i=0; i<miObjetoConvertido.length;i++){
            console.log(miObjetoConvertido[i]);
        };
      };
      cadaUnoDeLosObjetos({autor:"Lalo Ebrat",   nombre:"Mamacita", colaboracion:"Carlos Vives",   tiempo: "3.45 min",
      });