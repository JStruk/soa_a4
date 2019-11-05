<template>
  <div>
    <div
      v-if="error"
      class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm"
    >
      <span
        class="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center"
        >ERROR</span
      >
      <span class="inline-flex px-2 text-red-600"
        >Cannot delete cart - cart has an order in transit</span
      >
    </div>
    <div
      v-if="success"
      class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm"
    >
      <span
        class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center"
        >SUCCESS</span
      >
      <span class="inline-flex px-2 text-green-600">{{ successMessage }}</span>
    </div>
    <div class="text-gray-900 bg-gray-200 about">
      <div class="p-4 flex">
        <h1 class="text-3xl">Carts</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">Order ID</th>
              <th class="text-left p-3 px-5">Product ID</th>
              <th class="text-left p-3 px-5">Quantity</th>
            </tr>
            <tr
              v-for="(cart, index) in cartList"
              v-bind:key="cart.orderID"
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="cartList[index].OrderID"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="cartList[index].ProductID"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="cartList[index].Quantity"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="
                    saveCart(
                      cartList[index].OrderID,
                      cartList[index].ProductID,
                      cartList[index].Quantity
                    )
                  "
                >
                  Save
                </button>
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="deleteCart(cartList[index].CartID)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="orderID" />
              </td>
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="prodID" />
              </td>
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="quantity" />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="createCart()"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as cartService from "@/services/cart.js";
import ServicesConfig from "@/config/serviceURLs.json";

export default {
  data() {
    return {
      cartList: [],
      error: false,
      success: false,
      successMessage: "",
      orderID: "",
      prodID: "",
      quantity: ""
    };
  },
  async created() {
    let URL = ServicesConfig["CartService"];
    this.cartList = await cartService.getAllCarts(URL);
  },
  methods: {
    async saveCart(orderID, prodID, quantity) {
      let URL = ServicesConfig["CartService"];
      try {
        await cartService.updateCart(URL, orderID, prodID, quantity);
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully updated the cart!";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async deleteCart(cartID) {
      let URL = ServicesConfig["CartService"];
      try {
        await cartService.deleteCart(URL, cartID);
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully deleted the cart!";
        this.cartList = await cartService.getAllProducts(URL);
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async createCart() {
      console.log("attempting to create user");
      let URL = ServicesConfig["CartService"];
      try {
        await cartService.addCart(
          URL,
          parseInt(this.orderID, 10),
          parseInt(this.prodID, 10),
          parseInt(this.quantity, 10)
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully created the cart!";
        this.cartList = await cartService.getAllCarts(URL);
        this.orderID = "";
        this.prodID = "";
        this.quantity = "";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    }
  }
};
</script>
