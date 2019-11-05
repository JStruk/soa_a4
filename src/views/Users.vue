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
        >Cannot delete customer - customer has an order in transit</span
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
        <h1 class="text-3xl">Users</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">First Name</th>
              <th class="text-left p-3 px-5">Last Name</th>
              <th class="text-left p-3 px-5">Phone Number</th>
              <th class="text-left p-3 px-5">Role</th>
            </tr>
            <tr
              v-for="(customer, index) in customerList"
              v-bind:key="customer.id"
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="customerList[index].firstName"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="customerList[index].lastName"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  v-model="customerList[index].phoneNumber"
                  class="bg-transparent"
                />
              </td>
              <td class="p-3 px-5">
                <select value="user.role" class="bg-transparent">
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="
                    saveUser(
                      customerList[index].custID,
                      customerList[index].firstName,
                      customerList[index].lastName,
                      customerList[index].phoneNumber
                    )
                  "
                >
                  Save
                </button>
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="deleteUser(customer.custID)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="firstName" />
              </td>
              <td class="p-3 px-5">
                <input type="text" class="bg-transparent" v-model="lastName" />
              </td>
              <td class="p-3 px-5">
                <input
                  type="text"
                  class="bg-transparent"
                  v-model="phoneNumber"
                />
              </td>
              <td class="p-3 px-5">
                <select value="user.role" class="bg-transparent">
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="createUser()"
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
import * as customerService from "@/services/customer.js";
import ServicesConfig from "@/config/serviceURLs.json";

export default {
  data() {
    return {
      customerList: [],
      error: false,
      success: false,
      successMessage: "",
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };
  },
  async created() {
    let URL = ServicesConfig["CustomerService"];
    this.customerList = await customerService.getAllCustomers(URL);
    await console.log(customerService.getAllCustomers(URL));
  },
  methods: {
    async saveUser(customerID, firstName, lastName, phoneNumber) {
      console.log("attempting to save user");
      let URL = ServicesConfig["CustomerService"];
      try {
        await customerService.updateCustomer(
          URL,
          customerID,
          firstName,
          lastName,
          phoneNumber
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully updated the user!";
      } catch (error) {
        this.error = true;
        this.success = false;
        console.log("Error", error);
      }
    },
    async createUser() {
      console.log("attempting to create user");
      let URL = ServicesConfig["CustomerService"];
      try {
        await customerService.addCustomer(
          URL,
          this.firstName,
          this.lastName,
          this.phoneNumber
        );
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully created the user!";
        this.customerList = await customerService.getAllCustomers(URL);
        this.firstName = "";
        this.lastName = "";
        this.phoneNumber = "";
      } catch (error) {
        this.error = true;
        console.log("Error", error);
      }
    },
    async deleteUser(customerID) {
      let URL = ServicesConfig["CustomerService"];
      try {
        await customerService.deleteCustomer(URL, customerID);
        this.error = false;
        this.success = true;
        this.successMessage = "Successfully deleted the user!";
        this.customerList = await customerService.getAllCustomers(URL);
      } catch (error) {
        this.error = true;
        this.successMessage = false;
        console.log("Error", error);
      }
    }
  }
};
</script>
