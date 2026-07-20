let colorSemaforo = "rojo";

document.write("<h2>Resultado</h2>");
switch (colorSemaforo) {
    case "rojo":
        document.write("<p>Detenerse</p>"); 
        break;
        case "verde":
            document.write("<p>Avanzar</p>");
            break;
            default:
                document.write("<p>Precaución</p>");
                
}