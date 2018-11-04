import Chart from "chart.js";

const initRadar = () => {
  const chartElem = document.getElementById("chartjs");
  if (chartElem !== null) {
    const labels = Object.keys(importancesValues);
    const values = Object.values(importancesValues);
    // console.log(radar_values.keys());
    // radar_values.each((i) => {
    //   console.log(i);
    // });
    const chart = new Chart(chartElem, {
      type: "radar",
      data: {
        labels,
        datasets: [
          {
            label: "My criteria",
            data: values,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(208, 137, 37, 0.67)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0,
            borderWidth: 2
          }
        },
        scale: {
          ticks: {
            beginAtZero: true,
            showLabelBackdrop: false
          },
          pointLabels: {
            fontSize: 15
          }
        }
      }
    });
  }
};

$(document).on("turbolinks:load", () => {
  if ($("#chartjs").length) {
    initRadar();
  }
});
