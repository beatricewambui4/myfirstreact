import React from 'react'


const Dashboard = () => {
  return (
    <div>

<section class="white-section" id="pricing">

  <h2 class="section-heading">A Plan for Every Dog's Needs</h2>
  <p>Simple and affordable price plans for your and your dog.</p>

  <div class="row">

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Chihuahua</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">Free</h2>
          <p>5 Matches Per Day</p>
          <p>10 Messages Per Day</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
        </div>
      </div>
    </div>

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Labrador</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$49 / mo</h2>
          <p>Unlimited Matches</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
        </div>
      </div>
    </div>

    <div class="pricing-column col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3>Mastiff</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$99 / mo</h2>
          <p>Pirority Listing</p>
          <p>Unlimited Matches</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>

        </div>
      </div>
    </div>



  </div>

</section>

    </div>
  )
}

export default Dashboard
