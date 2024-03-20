let pais = prompt("Ingresa el pais que quieras visitar");

const mensaje = (element) => {
  if (element) {
    alert(
      "Encontramos un paquete ideal para ti en " +
        element.nombre +
        " USD " +
        element.valor +
        " por persona"
    );
  } else {
    alert(
      "No tenemos paquetes disponibles para ese destino, intenta con : Argentina, España o Inglaterra"
    );
  }
};

function busquedaPaises() {
  pais = pais.toLocaleLowerCase();
  if (pais) {
    for (let index = 0; index < paises.length; index++) {
      const element = paises[index];

      if (pais === element.nombre) {
        return mensaje(element);
      } else if (paises.length < index + 2) {
        return mensaje();
      }
    }
  }
}

busquedaPaises();
