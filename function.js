window.onload = function () {
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");
    let textarea = document.getElementById("textarea");
    select1.value = "Discos";  
    select2.innerHTML = "<option value='Pop'>Pop</option>" +
        "<option value='Rock'>Rock</option>" +
        "<option value='Latino' selected>Latino</option>" +
        "<option value='Otros'>Otros</option>";
   
    select1.onchange = function () {
        let selectedOption = select1.value;
        if (selectedOption == "Vídeos") {
            select2.innerHTML = "<option value='Humor'>Humor</option>" +
                "<option value='Drama'>Drama</option>" +
                "<option value='Ficción'>Ficción</option>" +
                "<option value='Otros'>Otros</option>";
        } else if (selectedOption == "Discos") {
            select2.innerHTML = "<option value='Pop'>Pop</option>" +
                "<option value='Rock'>Rock</option>" +
                "<option value='Latino'>Latino</option>" +
                "<option value='Otros'>Otros</option>";
        } else if (selectedOption == "Juegos") {
            select2.innerHTML = "<option value='Simulador'>Simulador</option>" +
                "<option value='Rol'>Rol</option>" +
                "<option value='Medieval'>Medieval</option>" +
                "<option value='Otros'>Otros</option>";
        }
    };
    select2.onchange = function () {
        let selectedOption = select2.value;
        textarea.value = "Texto de " + select1.value + " -> " + selectedOption;
    };
    textarea.value = "Texto de " + select1.value + " -> " + select2.value;
};