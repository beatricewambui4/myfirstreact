import React from 'react'
import "../style/Styles.css"

const Landing = () => {
  return (
    <div class="navland">
      <nav class="navbar navbar-expand-lg navbar-dark">

<a class="navbar-brand" href="">tindog</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span class="navbar-toggler-icon"></span>
</button>

</nav>
<div class="row">

<div class="col-lg-6">
  <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
  <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
  <button type="button" class="btn btn-outline-dark btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
</div>


</div>

</div>




  )
}

export default Landing
