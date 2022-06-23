import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
    setMenu(false);
    setLogin(false);
  };
  const handleLogin = () => {
    setLogin(!login);
    setMenu(false);
    setSearch(false);
  };
  const handleMenu = () => {
    setMenu(!menu);
    setSearch(false);
    setLogin(false);
  };
  const close = () => {
    setSearch(false);
    setLogin(false);
    setMenu(false);
  };
  return (
    <>
      <header>
        <div
          id="menu-bar"
          className={menu ? "fas fa-times" : "fas fa-bars"}
          onClick={handleMenu}
        ></div>

        <a href="#" className="logo">
          <span style={{ fontSize: "30px", color: "crimson" }}>T</span>ravel
        </a>

        <nav className={menu ? "navbar active" : "navbar"}>
          <Link to="/" onClick={close}>
            home
          </Link>
          <a href="#book" onClick={close}>
            book
          </a>
          <a href="#packages" onClick={close}>
            packages
          </a>
          <a href="#services" onClick={close}>
            services
          </a>
          <a href="#gallery" onClick={close}>
            gallery
          </a>
          <a href="#review" onClick={close}>
            review
          </a>
          <a href="#contact" onClick={close}>
            contact
          </a>
        </nav>

        <div className="icons">
          <i
            className={search ? "fas fa-times" : "fas fa-search"}
            id="search-btn"
            onClick={handleSearch}
          ></i>
          <i className="fas fa-user" id="login-btn" onClick={handleLogin}></i>
        </div>

        <form
          action=""
          className={
            search ? "search-bar-container active" : "search-bar-container"
          }
        >
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </header>

      <div
        className={
          login ? "login-form-container active" : "login-form-container"
        }
      >
        <i className="fas fa-times" id="form-close" onClick={close}></i>

        <form action="">
          <h3>login</h3>
          <input type="email" className="box" placeholder="enter your email" />
          <input
            type="password"
            className="box"
            placeholder="enter your password"
          />
          <input type="submit" value="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have and account? <a href="#">register now</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Header;
