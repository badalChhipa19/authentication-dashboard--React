import { Chart } from "react-google-charts";

import "./product-chart.style.scss";

const ProductChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["albums", 250],
    ["photos", 800],
    ["posts", 100],
    ["comments", 500],
  ];

  const options = {
    pieHole: 0.8,
    is3D: false,
    chartArea: {
      width: "fit-content",
    },
  };

  return (
    <div className="product__chart shadow">
      <Chart chartType="PieChart" width="100%" data={data} options={options} />
    </div>
  );
};

export default ProductChart;
