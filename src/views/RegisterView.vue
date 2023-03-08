<template>
  <div class="container">
    <div class="row">
      <div class="col-12" style="margin-top: 1rem;">
        <h1>Welcome Newbie!</h1>
      </div>
      <div class="holder">
        <div class="col">
          <form
            action="https://formspree.io/f/xrgvgwee"
            method="POST"
            class="row row-md-4 g-3"
            style="margin-top: 1rem;"
          >
            <div class="col-md-6">
              <input
                type="text"
                placeholder="First Name"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <input type="text" placeholder="Last Name" class="form-control" />
            </div>
            <div class="col-md-56">
              <input type="text" placeholder="Gender" class="form-control" />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="connections4u@gmail.com"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="082 506 2750"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <input
                type="password"
                placeholder="Type Password"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="Re-type Password"
                class="form-control"
              />
            </div>
          </form>
        </div>
        <div class="col mt-5 form-btns">
          <button type="button" class="btn btn-primary">Create Account</button>
          <router-link class="btn btn-danger backBtn" to="/login"
            >Back</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* form {
  border: 1px solid black;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 10px rgb(25, 131, 150);
  padding: 100px;
  height: 750px;
  width: 700px;
  border-radius: 35%;
}

.loginForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backBtn {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 80%;
}

.loginForm input,
button {
  width: 80%;
  border-radius: 20px;
}

.loginForm input {
  padding: 10px;
  margin-bottom: 30px;
} */

.form-control {
  border: 1px solid black;
}
.container {
  margin-top: 6rem;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 5px rgb(25, 131, 150);
}

.mt-5{
    display: flex;
    justify-content: center;
    align-content: center;
    float: right;
    gap: 10px;
    margin-bottom: 3rem;
}
.backBtn{
    width: 8.5rem;
}

/*.holder {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col {
  margin-top: 2rem;
  position: relative;
  justify-content: center;
  align-items: center;
} */
</style>