import React from "react";
import { Fragment } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [blogs, setBlogs] = useState([])



  const deleteCard = (item) => {
    axios.delete(`http://192.168.1.28:3004/posts/${item.id}`).then((res) => {
      console.log("res delete = ", res);
      getData();
    });
  };

  const getData = () => {
    axios.get("http://192.168.1.28:3004/posts").then((res) => {
      console.log("res get = ", res);
      setBlogs(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <section
        id="POSTS"
        className=" w-full px-10 py-10 pt-5 h-full flex flex-wrap bg-gray-200"
      >
        {blogs
          .map((blog) => (
            <Card
              key={blog.id}
              title={blog.title}
              body={blog.body}
              image={blog.image}
              onDelete={() => {
                console.log("delete ditekan");
                deleteCard(blog);
              }}

           
            />
          ))
          .reverse()}
      </section>
    </Fragment>
  );
};

export default Posts;
