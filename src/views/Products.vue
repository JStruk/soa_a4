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
        >Cannot delete product - product has an order in transit</span
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
      <span class="inline-flex px-2 text-green-600"
        >{{successMessage}}</span
      >
    </div>
    <div class="text-gray-900 bg-gray-200 about">
      <div class="p-4 flex">
        <h1 class="text-3xl">Products</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">Product Name</th>
              <th class="text-left p-3 px-5">Price</th>
              <th class="text-left p-3 px-5">Weight</th>
              <th class="text-left p-3 px-5">In Store</th>
            </tr>
            <tr
              v-for="(product,index) in productList"
              v-bind:key="product.prodID"
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="productList[index].prodName"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="productList[index].price"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="productList[index].prodWeight"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="productList[index].inStock"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="
                    saveProduct(
                      productList[index].prodId,
                      productList[index].prodName,
                      productList[index].price,
                      productList[index].prodWeight,
                      productList[index].inStock,
                    )
                  "
                >
                  Save
                </button>
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="deleteProduct(productList[index].prodId)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr
  
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
            <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="productName"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="price"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="weight"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="inStock"
                />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="createProduct()"
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
import * as productService from "@/services/product.js";
import ServicesConfig from "@/config/serviceURLs.json";

export default {
  data() {
    return {
      productList: [],
      error: false,
      success: false,
      successMessage: "",
      productName: "",
      price: "",
      weight: "",
      inStock: "",
    };
  },
  async created() {
    let URL = ServicesConfig["ProductService"];
    this.productList = await productService.getAllProducts(URL);
  },
  methods: {
    async saveProduct(productID, name, price, weight, inStock) {
      let URL = ServicesConfig["ProductService"];
      try {
        await productService.updateProduct(
          URL,
          productID,
          name,
          parseFloat(price),
          parseFloat(weight),
          inStock
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully updated the product!"
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async deleteProduct(productID) {
      let URL = ServicesConfig["ProductService"];
      try {
        await productService.deleteProduct(URL, productID);
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully deleted the product!"
        this.productList = await productService.getAllProducts(URL);
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async createProduct() {
      console.log("attempting to create user");
      let URL = ServicesConfig["ProductService"];
      try {
        await productService.addProduct(
          URL,
          this.productName,
          parseFloat(this.price),
          parseFloat(this.weight),
          this.inStock,
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully created the product!"
        this.productList = await productService.getAllProducts(URL);
        this.price = "";
        this.weight = "";
        this.inStock = "";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
  }
};
</script>
