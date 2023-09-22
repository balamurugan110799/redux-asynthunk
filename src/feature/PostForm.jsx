import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { fetchUser, selectAllUser, userError, userStatus } from "./UserSlice";
// import { selectAllUser } from "../user/userSlice";

export default function PostFrom() {
  const dispatch = useDispatch();

  const user = useSelector(selectAllUser);
  const userErr = useSelector(userError);
  const userSta = useSelector(userStatus);

  console.log(user, userErr, userSta);
  if (userSta === "idle") {
    dispatch(fetchUser());
  }

  //   const user = useSelector(selectAllUser);
  //   console.log(user);

    const userOption = user.map((user) => <option>{user.name}</option>);

  const [data, setData] = useState({
    id: null,
    title: "",
    content: "",
    userID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const canSave =
    Boolean(data.title) && Boolean(data.content) && Boolean(data.title);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" p-3">
      <form>
        <div>
          <label htmlFor="postTitle">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border "
            value={data.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="postAuthor">Author</label>
          <select
            name="userID"
            className="border"
            value={data.userID}
            onChange={(e) => handleChange(e)}
          >
            {userOption}
          </select>
        </div>
        <div>
          <label htmlFor="postcontent">content</label>
          <input
            type="text"
            name="content"
            id="content"
            className="border "
            value={data.content}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button
            className=" bg-primary text-white my-2 px-8 py-2"
            disabled={!canSave}
            onClick={(e) => handleClick(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
