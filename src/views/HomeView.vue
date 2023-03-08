<template>
    <div class="container">
      <div class="row mb-3">
        <div class="col">
         <h1 class="landingHeading">connections4U</h1>
        </div>
      </div>

      <div class="row ceo">
        <div class="col">
          <h1>Meet The CEO's</h1>
        </div>
      </div>

      <div class="row ceo">
        <div class="col-6 mt-3 mb-3">
          
          <img
            src="../assets/pfp.jpg"
            alt=""
            class="animate__animated animate__slideInLeft img-fluid"
            style="border-radius: 50%; width: 30rem"
          />
        </div>
        <div class="col-6 mt-3 mb-3">
          <img
            src="../assets/self-portrait.jpg"
            alt=""
            class="animate__animated animate__slideInRight img-fluid"
            style="border-radius: 50%; width: 30rem"
          />
        </div>
        <div class="col-12">
          <div class="para">
            <p>
              Connections4U is an online E-commerce website that supplies products from various companies and sell them for a cheaper retail price.
              We have started this business to help people afford the products when they cannot afford at normal retail prices. We are partnered with Incredible connections, Game, Cash Crusaders, Computer Mania and many other companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  /* img {
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
    margin: 5rem;
  } */
  .ceo {
    margin-bottom: 4rem;
  }
  
  .col-12{
      margin-top: 7rem;
  }
  
  .para {
    /* width: 70rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

.landingHeading{
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
  </style>