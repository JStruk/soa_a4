import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

export const getCusts = async url => {// eslint-disable-line no-unused-vars
  const response = await axios.get("https://localhost:44383/Customers");
  console.log(response.data);
  return response.data;
};


export const getCustomerDetails = async id => {// eslint-disable-line no-unused-vars
  const response = await axios.get("https://localhost:44383/Customers/" + id);
  return response.data;
};

export const updateCustomer = async (_id, _firstName, _lastName, _phoneNumber) => {// eslint-disable-line no-unused-vars
  const response = axios.put('/Customers', {
    firstName: _firstName,
    lastName: _lastName,
    phoneNumber: _phoneNumber
  })
  return response.data;
 // const response = await axios.put("https://localhost:44383/Customers/" + id);
 // return response.data;
};