import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand fst-italic fw-bold shake" href="#">AtoZ Metal Works</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to='/' >Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/Service">Services</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


    </>
  )
}

export default Header