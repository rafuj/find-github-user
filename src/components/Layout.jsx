import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import Input from "./Input";
import UpDateRepos from "./UpDateRepos";
import UpdateUser from "./UpdateUser";
export default function Layout() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
  };

  async function getUser(user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const responseData = await response.json();
      getRepos(user);
      setUser(responseData);
    } catch (err) {
      console.log(err);
    }
  }
  async function getRepos(user) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const responseData = await response.json();
      setRepos(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="section-wrapper ms-auto me-auto py-5 px-4">
      <div className="w-100">
        <form className="search--form mb-lg-5" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Search by Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" className="input-group-text btn btn-base">
              <AiFillGithub className="me-2" /> Search
            </button>
          </div>
        </form>
        {user && <UpdateUser user={user} />}
        {repos && <UpDateRepos repos={repos} />}
      </div>
    </div>
  );
}
