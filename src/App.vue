<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      
    </div>
    <router-view />-->
    <button @click="onClick()">Test</button>
  </div>
</template>

<script>
//import * as customerService from "./services/customer.js";
//import * as productService from "./services/product.js";
import * as orderService from "./services/order.js";
import ServicesConfig from "./config/serviceURLs.json";

export default {
  name: "soa_a4",
  data() {
    return {};
  },
  async created() {},
  methods: {
    async onClick() {
      //let URL = ServicesConfig["CustomerService"];
      //let tmp = await customerService.getAllCustomers(URL);
      //let URL = ServicesConfig["ProductService"];

      let URL = ServicesConfig["OrderService"];
      /* Test updateCustomer */
      /* let tmp = await customerService.updateCustomer(
        URL,
        11,
        "Justin",
        "Struk",
        "519-111-2222"
      );*/

      /* Test getCusomterDetails */
      //let tmp = await customerService.getCustomerDetails(URL, 1);

      /* Test add customer (post) */
      /*let tmp = await customerService.addCustomer(
        URL,
        "Nathan",
        "Davis",
        "519-222-3333"
      );*/

      /* Test deleteCustomer */
      // let tmp = await customerService.deleteCustomer(URL, 18);

      /* Test getAllProducts */
      //let tmp = await productService.getAllProducts(URL);

      /* Test getProductDetails */
      //let tmp = await productService.getProductDetails(URL, 1);

      /* Test updateProduct */
      //let tmp = await productService.updateProduct(URL, 1, "Grommet", 0.02, 0.005, "YES");

      /* Test addProduct */
      /*let tmp = await productService.addProduct(
        URL,
        "TestProd",
        1.34,
        0.69,
        "YES"
      );*/

      /* Test deleteProduct */
      //let tmp = await productService.deleteProduct(URL, 4);

      /* Test getOrderDetails */
      //let tmp = await orderService.getOrderDetails(URL, 1);

      /*Test updateOrder */
      let tmp = await orderService.updateOrder(
        URL,
        4,
        1,
        "TESTPO",
        "2019-11-04"
      );

      console.log(tmp);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
