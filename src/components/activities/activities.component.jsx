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
    width: "100%",
    height: "100%",
  };

  return (
    <div className="dashboard__activities box__utils">
      <h2 className="heading__secondary">Activities</h2>
      <Chart chartType="Bar" data={data} options={options} legendToggle />
    </div>
  );
};

export default Activites;
