import React from "react";
export default function UpdateUser({ user }) {
  return (
    user !== [] && (
      <div className="card text-center">
        <div className="card-header border-bottom">
          <h4 className="pt-1 m-0">{user.name}</h4>
        </div>
        <div className="card-body">
          <div className="author-thumb">
            <img src={user.avatar_url} alt="author" />
          </div>
          <span className="info mt-3 d-block">{user.bio}</span>
        </div>
        <div className="cart-footer border-top d-flex flex-wrap justify-content-evenly p-2">
          <span className="p-1">
            <strong className="me-1 text-base">Followers:</strong>
            {user.followers}
          </span>
          <span className="p-1">
            <strong className="me-1 text-base">Following:</strong>
            {user.following}
          </span>
          <span className="p-1">
            <strong className="me-1 text-base">Repos: </strong>
            {user.public_repos}
          </span>
          <span className="p-1">
            <strong className="me-1 text-base">Location: </strong>
            {user.location}
          </span>
        </div>
      </div>
    )
  );
}
