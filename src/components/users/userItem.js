import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img className="round-img" alt="" src={avatar_url} style={{ width: "6Opx" }} />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        more
      </Link>
    </div>
  );
};

export default UserItem;
