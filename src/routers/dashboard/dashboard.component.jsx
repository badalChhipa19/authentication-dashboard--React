import { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import TopNav from "../../components/topnav/topnav.component";
import Activites from "../../components/activities/activities.component";
import Product from "../../components/product/product.component";

import "./dashboard.style.scss";

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
  // const [users, setUsers] = useState([]);

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
