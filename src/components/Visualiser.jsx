import React from "react";
import { Doughnut } from "react-chartjs-2";

const Visualiser = (props) => {
  const processColors = (colors) => {
    const data = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ],

    };
    colors.forEach((color) => {
      data.datasets[0].data.push(color.percentage);
      data.datasets[0].backgroundColor.push(color.hex);
      data.labels.push(color.hex);
    });
    return data;
  };

  const colors = props.colors;

  const processedColors = processColors(colors);
  const options =  {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white',
                fontSize: 18,
            }
        }
    }
 console.log(processedColors)
  return (
    <div>
      <Doughnut data={processedColors} options={options} />
    </div>
  );
};

export default Visualiser;
