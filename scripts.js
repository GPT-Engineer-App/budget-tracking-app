document.addEventListener("DOMContentLoaded", function () {
  const ctxGastos = document.getElementById("gastosChart").getContext("2d");
  const gastosChart = new Chart(ctxGastos, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Gastos",
          data: [120, 150, 180, 200, 170, 190],
          backgroundColor: "rgba(231, 76, 60, 0.2)",
          borderColor: "rgba(231, 76, 60, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctxEconomias = document.getElementById("economiasChart").getContext("2d");
  const economiasChart = new Chart(ctxEconomias, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Economias",
          data: [200, 250, 300, 350, 400, 450],
          backgroundColor: "rgba(46, 204, 113, 0.2)",
          borderColor: "rgba(46, 204, 113, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctxInvestimentos = document.getElementById("investimentosChart").getContext("2d");
  const investimentosChart = new Chart(ctxInvestimentos, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Investimentos",
          data: [300, 350, 400, 450, 500, 550],
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderColor: "rgba(52, 152, 219, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
