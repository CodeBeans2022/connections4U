<template>
    <div>
<div class="container">
    <div class="row">
        <div class="col">
            <form class="loginForm">
        <input type="password" placeholder="New Password">
        <input type="password" placeholder="Re-type New Password">
        <button class="btn btn-info">Submit</button>
      </form>
        </div>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
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