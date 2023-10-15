import Chart from "react-google-charts";

import "./activities.style.scss";

const randomNum = () => {
  return Math.floor(Math.random() * 20 + 1);
};

const Activites = () => {
  const data = [
    ["Posts", "Posts", "Comments"],
    ["week 1", randomNum(), randomNum()],
    ["week 2", randomNum(), randomNum()],
    ["week 3", randomNum(), randomNum()],
    ["week 4", randomNum(), randomNum()],
  ];

  const options = {
    colors: ["#98D89E", "#EE8484"],
    title: "Population of Largest U.S. Cities",
    chartArea: {
      width: "100%",
    },
    hAxis: { title: "City" },
    vAxis: { title: "Count" },
  };

  return (
    <div className="dashboard__activities shadow">
      <h2 className="heading__secondary">Activities</h2>
      <Chart
        chartType="Bar"
        width="100%"
        height="fit-content"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Activites;
