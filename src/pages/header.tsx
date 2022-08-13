import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
const logoHeader = require("./code.png");

function Header() {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const [searchValue] = useState("");
  const clear = (e: any) => {};
  const handleSubmit = (e: any) => {
    setData(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const search = () => {
    console.log("Search", data);
    navigate("/search?q=" + data);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-parent">
            <Link to={'/'}>
              <img src={logoHeader} height={50} width={60} />
              </Link>
          </div>
          <div className="header-search-parent">
            <div className="position-relative">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
                id=""
                aria-describedby="emailHelp"
                value={data}
                onChange={handleSubmit}
                onKeyDown={handleKeyDown}
              />

              {searchValue && searchValue.length > 0 ? (
                <button
                  className="btn btn-search-clear"
                  onClick={(e) => {
                    e.preventDefault();
                    clear(e);
                  }}
                >
                  X
                </button>
              ) : null}

              <button
                className="btn btn-outline-primary search-button"
                onClick={search}
              >
                <span>
                  <img src="assets/icons/search-icon.svg" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
