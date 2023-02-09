import React from "react";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary comp">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://media.licdn.com/dms/image/D560BAQG0s1-1ZaCpOg/company-logo_200_200/0/1665642464301?e=2147483647&v=beta&t=VyTZZBmONApgK8UDQ7L1pejBVEWroFdQbDER9-4s9uQ"
            style={{ width: "100px", height: "70px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex" role="search">
            <li
              class="nav-item dropdown"
              style={{ color: "black", fontSize: "24px" }}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
