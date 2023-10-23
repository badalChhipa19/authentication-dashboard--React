import { useEffect, useState } from "react";
import { useContext } from "react";

import { userContext } from "./../../context/user.context";
import Sidebar from "../../components/sidebar/sidebar.component";
import TopNav from "../../components/topnav/topnav.component";
import Activites from "../../components/activities/activities.component";
import Product from "../../components/product/product.component";

import "./dashboard.style.scss";
import { useNavigate } from "react-router-dom";

const fetchData = async (el) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${el}`);
  const data = await res.json();

  return data;
};

const randomNum = (num) => {
  return Math.floor(Math.random() * num) + 1;
};

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComment] = useState([]);

  const navigation = useNavigate();
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    if (!currentUser) {
      navigation("/");
    }
  }, [currentUser, navigation]);

  useEffect(() => {
    const setData = async () => {
      const resUser = await fetchData("users");
      const resPosts = await fetchData("posts");
      const resComments = await fetchData("comments");

      setUsers(resUser);
      setPosts(resPosts);
      setComment(resComments);
    };

    setData();
  }, []);

  return (
    <section className="dashboard">
      <input type="checkbox" id="abstract__sidebar_checkbox" />
      <label
        htmlFor="abstract__sidebar_checkbox"
        className="abstract__sidebar_label"
      >
        <div className="lines"></div>
      </label>
      <Sidebar />
      <TopNav
        statistics={{
          users: users.slice(randomNum(users.length)),
          posts: posts.slice(randomNum(posts.length)),
          comments: comments.slice(randomNum(comments.length)),
        }}
      />
      <Activites />
      <Product />
    </section>
  );
};

export default Dashboard;
