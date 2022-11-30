import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

function PublicView() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Enseñanza del Apocalipsis
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? 'active' : ''
                  }}`}
                  to="/"
                >
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              
            </ul>
            <span class="navbar-text"><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </>
  );
}

export default PublicView;
