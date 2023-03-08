<template>
  <div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-primary p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>

      <nav class="navbar sticky-top">
        <div class="container-fluid">
          <img class="ourLogo" src="https://i.postimg.cc/zX1wCPLT/FINALLOGO2.png" alt="">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas bg-primary offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title mx-auto"
                id="offcanvasNavbarLabel"
                style="color: white;"
              >
                connections4U
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <span class="text-muted">
                  <router-link class="nav-links" to="/">Home</router-link>
                  <router-link class="nav-links" to="/all-products">Products</router-link> 
                  <router-link class="nav-links" to="/admin">Admin</router-link> 
                  <router-link class="nav-links" to="/login">Login</router-link> 
                  <router-link class="nav-links" to="/register">Register</router-link>
                  <router-link class="nav-links" to="/contact">Contact</router-link>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
  </div>
</template>

<script>
export default {};
</script>

<style>
.ourLogo{
  height: 60px;
}

.text-muted{
  margin-top: 90px;
  display: flex;
  flex-direction: column;
}

.nav-links{
  margin-bottom: 90px;
  color: white;
  text-decoration: none;
}

.nav-links:hover{
  color: rgb(0, 200, 255);
  height: 30px;
  background-color: rgb(4, 90, 201);
 border-radius: 20px;
}

</style>