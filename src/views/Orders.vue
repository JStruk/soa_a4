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
        >Cannot delete order - order is already in transit</span
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
        <h1 class="text-3xl">Orders</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">Customer</th>
              <th class="text-left p-3 px-5">order Number</th>
              <th class="text-left p-3 px-5">Order Date</th>
            </tr>
            <tr
              v-for="(order, index) in orderList"
              v-bind:key="order.prodID"
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="orderList[index].CustomerID"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="orderList[index].PONumber"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="orderList[index].Date"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="
                    saveOrder(
                      orderList[index].OrderID,
                      orderList[index].CustomerID,
                      orderList[index].PONumber,
                      orderList[index].Date
                    )
                  "
                >
                  Save
                </button>
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="deleteOrder(orderList[index].prodId)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="customerID"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="orderNumber"
                />
              </td>
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="orderDate" />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="createOrder()"
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
import * as orderService from "@/services/order.js";
import ServicesConfig from "@/config/serviceURLs.json";

export default {
  data() {
    return {
      orderList: [],
      error: false,
      success: false,
      successMessage: "",
      customerID: "",
      orderNumber: "",
      orderDate: ""
    };
  },
  async created() {
    let URL = ServicesConfig["OrderService"];
    this.orderList = await orderService.getAllOrders(URL);
  },
  methods: {
    async saveOrder(orderID, customerID, PONumber, orderDate) {
      let URL = ServicesConfig["OrderService"];
      try {
        await orderService.updateOrder(
          URL,
          orderID,
          customerID,
          PONumber,
          new Date(orderDate)
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully updated the order!";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async deleteOrder(orderID) {
      let URL = ServicesConfig["OrderService"];
      try {
        await orderService.deleteOrder(URL, orderID);
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully deleted the order!";
        this.orderList = await orderService.getAllorders(URL);
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async createOrder() {
      console.log("attempting to create user");
      let URL = ServicesConfig["OrderService"];
      try {
        await orderService.addOrder(
          URL,
          this.customerID,
          this.orderNumber,
          this.orderDate
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully created the order!";
        this.productList = await orderService.getAllOrders(URL);
        this.customerID = "";
        this.orderNumber = "";
        this.orderDate = "";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    }
  }
};
</script>
