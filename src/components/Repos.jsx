/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Repos({ repos }) {
  return (
    <div className="col-sm-6">
      <a
        href={repos.html_url}
        target="_blank"
        className="card text-center text-light hover-effects"
        rel="noreferrer"
      >
        <div className="card-body text-capitalize">
          <h6 className="title m-0">{repos.name}</h6>
        </div>
        <div className="cart-footer border-top d-flex flex-wrap justify-content-evenly p-2 font-sm">
          <span className="p-1">
            <strong className="me-1 text-base">Created At:</strong>
            {new Date(repos.created_at).toDateString()}
          </span>
          <span className="p-1">
            <strong className="me-1 text-base">Last Updated:</strong>
            {new Date(repos.updated_at).toDateString()}
          </span>
        </div>
      </a>
    </div>
  );
}
