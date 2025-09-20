document.getElementById("multiplicarForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (numero < 1 || numero > 10 || isNaN(numero)) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, ingresa un número válido entre 1 y 10.</p>";
    return;
  }

  let suma = 0;
  let tablaHTML = `<h2>Tabla del ${numero}</h2><ul>`;

  for (let i = 1; i <= 10; i++) {
    const producto = numero * i;
    tablaHTML += `<li>${numero} × ${i} = ${producto}</li>`;
    suma += producto;
  }

  tablaHTML += `</ul><p><strong>Suma total:</strong> ${suma}</p>`;
  resultadoDiv.innerHTML = tablaHTML;
});