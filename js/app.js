document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("results");
  const modalOne = document.getElementById("modalOne");
  const modalTwo = document.getElementById("modalTwo");
  const modalThree = document.getElementById("modalThree");
  const stepOne = document.getElementById("step1");
  const stepTwo = document.getElementById("step2");
  const stepThree = document.getElementById("step3");
  const start = document.getElementById("start");

  let currentModal = 1;

  const floatingSelect = document.getElementById("floatingSelect");
  const next = document.getElementById("next");
  const guardar = document.getElementById("guardar");

  floatingSelect.addEventListener("change", function () {
    const valueOpcion =
      floatingSelect.options[floatingSelect.selectedIndex].text;
    if (valueOpcion !== "Destinos") {
      localStorage.setItem("Destino", valueOpcion);
    } else {
      localStorage.setItem("Destino", "Bariloche");
    }
  });

  next.addEventListener("click", () => {
    if (currentModal === 1) {
      modalOne.style.display = "none";
      modalTwo.style.display = "block";
      currentModal = 2;
      stepTwo.disabled = false;
    } else if (currentModal === 2) {
      modalTwo.style.display = "none";
      modalThree.style.display = "block";
      currentModal = 3;
      stepThree.disabled = false;

      const checkboxes = document.querySelectorAll(
        "#modalTwo input[type='checkbox']"
      );
      checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(
          `Checkbox${index + 1}`,
          checkbox.checked ? checkbox.value : ""
        );
      });
    } else if (currentModal === 3) {
      const textareaValue = document.getElementById("floatingTextarea2").value;
      localStorage.setItem("Aclaraciones", textareaValue);
      next.disabled = true;
      guardar.disabled = false;
    }
  });

  stepOne.addEventListener("click", () => {
    modalOne.style.display = "block";
    modalTwo.style.display = "none";
    modalThree.style.display = "none";
    currentModal = 1;
    stepOne.disabled = false;
    stepTwo.disabled = true;
    stepThree.disabled = true;
    next.disabled = false;
    guardar.disabled = true;
  });

  stepTwo.addEventListener("click", () => {
    modalOne.style.display = "none";
    modalTwo.style.display = "block";
    modalThree.style.display = "none";
    currentModal = 2;
    stepOne.disabled = false;
    stepTwo.disabled = false;
    stepThree.disabled = true;
    next.disabled = false;
    guardar.disabled = true;
  });

  stepThree.addEventListener("click", () => {
    modalOne.style.display = "none";
    modalTwo.style.display = "none";
    modalThree.style.display = "block";
    currentModal = 3;
    stepOne.disabled = false;
    stepTwo.disabled = false;
    stepThree.disabled = false;
    next.disabled = false;
    guardar.disabled = true;

    const checkboxes = document.querySelectorAll(
      "#modalTwo input[type='checkbox']"
    );
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked =
        localStorage.getItem(`Checkbox${index + 1}`) === "true";
    });
  });

  guardar.addEventListener("click", () => {
    displayResults(results);
  });

  function displayResults(element) {
    const destino = localStorage.getItem("Destino");
    const checkbox1 = localStorage.getItem("Checkbox1");
    const checkbox2 = localStorage.getItem("Checkbox2");
    const checkbox3 = localStorage.getItem("Checkbox3");
    const checkbox4 = localStorage.getItem("Checkbox4");
    const aclaraciones = localStorage.getItem("Aclaraciones");

    let serviciosSeleccionados = "";
    if (checkbox1) serviciosSeleccionados += `<li>${checkbox1}</li>`;
    if (checkbox2) serviciosSeleccionados += `<li>${checkbox2}</li>`;
    if (checkbox3) serviciosSeleccionados += `<li>${checkbox3}</li>`;
    if (checkbox4) serviciosSeleccionados += `<li>${checkbox4}</li>`;

    const html = `
      <h2>Resultados:</h2>
      <p><strong>Destino:</strong> ${destino}</p>
      <p><strong>Servicios seleccionados:</strong></p>
      <ul>${serviciosSeleccionados}</ul>
      <p><strong>Aclaraciones:</strong> ${aclaraciones}</p>
    `;

    element.innerHTML = html;
  }
});
