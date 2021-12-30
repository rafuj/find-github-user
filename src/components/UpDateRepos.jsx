import React from "react";
import Repos from "./Repos";
export default function UpDateRepos({ repos }) {
  return (
    <>
      <h3 className="mb-3 text-center mt-5">
        {repos && <span>All Repositories</span>}
      </h3>
      <div className="row g-3">
        {repos && repos.map((item) => <Repos repos={item} />)}
      </div>
    </>
  );
}
