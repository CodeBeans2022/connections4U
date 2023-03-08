<template>
 <div class="container mt-5">
  <div class="row rowSpace">
    <div class="col-12">
      <h1>Welcome Back!</h1>
    </div>
    <div class="col mt-2">
      <form class="loginForm">
        <input type="text" placeholder="Please Enter Your Email">
        <input type="password" placeholder="Please Enter Your Password">
        <button class="btn btn-primary">Login</button>
        <router-link to="">Forget Password</router-link>
        <router-link to="/register">Create Account</router-link>
      </form>
    </div>
  </div>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .container{
    border: 1px solid black;
    background-color: whitesmoke;
    box-shadow: 0px 0px 10px 10px rgb(25, 131, 150);
    padding: 50px;
    height: 450px;
    width: 500px;
    border-radius: 80%;
 
  }
.loginForm{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginForm input, button{
  width: 80%;
  border-radius: 20px;
}

.loginForm input{
  margin: 10px;
  padding: 10px;
}

.rowSpace{
  padding: 30px;
}
</style>