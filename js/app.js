let pais = prompt("Ingresa el pais de America del sur que quieras visitar");

function argentina() {
    pais = pais.toLocaleLowerCase();
  switch (pais) {
    case "argentina":
      alert("Bien! Vamos!!!");
      break;
    case "brasil":
      alert("Bien! Vamos!!!");
      break;
    case "chile":
      alert("Bien! Vamos!!!");
      break;
    case "uruguay":
      alert("Bien! Vamos!!!");
      break;
    case "paraguay":
      alert("Bien! Vamos!!!");
      break;
    case "bolivia":
      alert("Bien! Vamos!!!");
      break;
    case "peru":
      alert("Bien! Vamos!!!");
      break;
    case "ecuador":
      alert("Bien! Vamos!!!");
      break;
    case "colombia":
      alert("Bien! Vamos!!!");
      break;
    case "venezuela":
      alert("Bien! Vamos!!!");
      break;
    case "guyana":
      alert("Bien! Vamos!!!");
      break;
    case "surinam":
      alert("Bien! Vamos!!!");
      break;
    case "guayana francesa":
      alert("Bien! Vamos!!!");
      break;
    default:
      alert("Ese pais no pertenece a America del Sur");
      break;
  }
}

argentina();
