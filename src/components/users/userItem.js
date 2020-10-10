import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img className="round-img" alt="" src={avatar_url} style={{ width: "6Opx" }} />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        more
      </a>
    </div>
  );
};

export default UserItem;
