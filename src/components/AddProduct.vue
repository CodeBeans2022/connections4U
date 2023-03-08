<template>
    <div class="container">
<!-- Modal -->
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="form" @submit.prevent="addingProduct">
        <h1>Add Product</h1>
        <label class="label">Product Name</label>
        <input type="text" v-model="payload.prodName">
        <label class="label">Price</label>
        <input type="number" v-model="payload.price">
        <label class="label">Category</label>
        <input type="text" v-model="payload.category">
        <label class="number">Quantity</label>
        <input type="text" v-model="payload.prodQuantity">
        <label class="label">Image</label>
        <input type="text" v-model="payload.imgURL">
        <button class="btn btn-success mt-3" type="submit" v-on:click="addingProduct">Add</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core'
    export default {
      data(){
        return {
            prodName: null,
            price: null,
            category: null,
            prodQuantity: null,
            imgURL: null
        }
      },
      setup(){
        let store = useStore();

        let payload = {
          prodName:'',
          price:'',
          category:'',
          prodQuantity:'',
          imgURL:''
        }

        let  addingProduct = () => {
          console.log(payload);
          store.dispatch('addProduct', payload);
          store.dispatch('fetchProducts');
          location.reload();
        }

        let products = computed(() => store.state.products)

        return{
          payload,
          addingProduct,
          products
        }
      },
      // methods: {
      //   addingProduct() {
      //     console.log(this.prodName);
      //      this.$store.dispatch('addProduct', {
      //       prodName:  this.prodName,
      //       price: this.price,
      //       category:  this.category,
      //       prodQuantity: this.prodQuantity, 
      //       imgURL: this.imgURL
      //     })
      //   }
      // }
    }
</script>
<style scoped>
.form{
    display: flex;
    flex-direction: column;
}
</style>