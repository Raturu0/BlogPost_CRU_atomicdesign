import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import axios from "axios";

const InputAdmin = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [textButton, setTextButton] = useState("SAVE");

  const getData = () => {
    axios.get("http://192.168.1.28:3004/posts").then((res) => {
      console.log("res get = ", res);
    });
  };

  const button = () => {
    const data = {
      title,
      body,
      image,
    };
    // jika nambah blog
    if (textButton == "SAVE") {
      // jika kolom title atau image kosong ngak mau keinput
      if (title == "" || image == "" || body == "") {
        console.log("isi data woi");
        alert("Please fill the input");
      } else {
        axios.post("http://192.168.1.28:3004/posts", data).then((res) => {
          console.log("res post = ", res);
          setBody("");
          setTitle("");
          setImage("");
          getData();
        });
        alert("Success add blog");
      }
    }
    // else if (textButton == "UPDATE") {
    //   axios
    //     .put(`http://192.168.1.28:3004/posts/${labelBlog.id}`, data)
    //     .then((res) => {
    //       console.log("res put = ", res);
    //       getData();
    //       setTextButton("SAVE");
    //       setTitle("");
    //       setBody("");
    //       setImage("");
    //     });
    // }
  };

  return (
    <Fragment>
      <form action="">
        <section
          id="INPUT-ADMIN"
          className=" p-10 sm:w-[75%] lg:w-[60%] sm:mx-auto"
        >
          <div id="IMAGE">
            <label htmlFor="image">
              <h1 className="text-blue-500 font-bold text-xl my-1">Image</h1>
            </label>
            <input
              id="image"
              type="text"
              placeholder="Input link image"
              className="w-full rounded-lg p-3 font-bold "
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </div>
          <div id="TITLE">
            <label htmlFor="title">
              <h1 className="text-blue-500 font-bold text-xl my-1">Title</h1>
            </label>
            <input
              required
              id="title"
              type="text"
              placeholder="Input title"
              className="w-full rounded-lg p-3 font-bold "
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div id="DESC" className="mt-5">
            <label htmlFor="title">
              <h1 className="text-blue-500 font-bold text-xl my-1">
                Description
              </h1>
            </label>
            <textarea
              required
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded-lg w-full p-3"
              placeholder="Input description"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            ></textarea>
          </div>
          <div id="BUTTON" className="mt-5 w-full ">
            <button type="submit" className="w-full" onClick={button}>
              <h1 className="font-bold text-white bg-blue-500 py-3 rounded-lg hover:bg-blue-700 transition-all duration-500">
                {textButton}
              </h1>
            </button>
          </div>
        </section>
      </form>
    </Fragment>
  );
};

export default InputAdmin;
