import React, { useEffect, useState } from "react";

export const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/dipexplorer")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-500 m-3  text-center text-4xl p-2 flex content-center justify-center">
      <img src={data.avatar_url} alt="avatar" width={300} />
      <div>
        <p>Github Followers: {data.followers}</p>
        <p>Github Followings: {data.following}</p>
      </div>
    </div>
  );
};
