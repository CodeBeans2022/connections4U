<template>
    <div class="container">
        <div class="row justify-content-center mx-2">
            <div class="col-sm-4 my-5 proj " v-for="item in items" :key="item.id">
                <div class="card" style="width: 15rem; border: 1px solid black;">
                    <img :src="item.imgURL" class="card-img-top" alt="...">
                    <div class="card-body">
                        <router-link class="btn btn-success" :to="{name: 'singleProduct', params: {id: item.id}}">View Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'product-comp',
    computed: {
        items() {
            return this.$store.state.products
        }
    },
    created() {
        this.$store.dispatch('fetchProducts')
    },
}
</script>

<style>
.container{
  display: inline-block;
}

.proj{
  height: 40vh;
  /* max-width: ; */
  background-size: 100%;
  border-radius:10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.proj img{
  max-width: 100%;
  height: 12rem;
  margin-top: 10%;
}

</style>