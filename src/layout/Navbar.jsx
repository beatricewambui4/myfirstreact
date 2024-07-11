import React from 'react'
import { Link } from "react-router-dom";
import { appLinks } from '../constant/Links';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link to={appLinks?.Landing} className="navbar-brand">
          Myfirst react page
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to={appLinks?.Dashboard}>
                Dashboard
              </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={appLinks?.About}>
                About
              </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={appLinks?.Contact}>
                Contacts
              </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
