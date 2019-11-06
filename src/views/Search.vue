<template>
  <div class="flex justify-center">
    <div
      v-if="visible"
      @click.self="visible = false"
      class="h-screen w-full absolute flex items-center justify-center bg-modal"
    >
      <div
        class="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full overflow-y-scroll our-modal flex"
      >
      <div class="inline-block mr-2">
        <div class="mb-4">
          <h1>Customers</h1>
        </div>
        <div class="mb-8">
          <p v-for="customer in filteredCustomerList" v-bind:key="customer.custID">
            {{customer.firstName}}
          </p>
        </div>
        </div>
         <div class="inline-block mr-2">
        <div class="mb-4">
          <h1>Carts</h1>
        </div>
        <div class="mb-8">
          <p v-for="cart in filteredCartList" v-bind:key="cart.cartID">
            {{cart.OrderID}}
          </p>
        </div>
        </div>

        <div class="inline-block mr-2">
        <div class="mb-4">
          <h1>Product</h1>
        </div>
        <div class="mb-8">
          <p v-for="product in filteredProductList" v-bind:key="product.prodID">
            {{product.prodName}}
          </p>
        </div>
        </div>

        <div class="inline-block mr-2">
        <div class="mb-4">
          <h1>Orders</h1>
        </div>
        <div class="mb-8">
          <p v-for="order in filteredOrderList" v-bind:key="order.prodID">
            {{order.OrderID}}
          </p>
        </div>
        </div>

      </div>
    </div>

    <div class="inline-block">
      <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium">Customer information</p>
        <div class="block mt-2 -mx-1 pl-1">
          <label class="hidden block text-sm text-gray-600" for="cus_id"
            >ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_id"
            name="cus_id"
            type="number"
            required=""
            placeholder="ID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_fname"
            >First Name</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="firstName"
            id="cus_fname"
            name="cus_fname"
            type="text"
            required=""
            placeholder="First Name"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_lname"
            >Last Name</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="lastName"
            id="cus_lname"
            name="cus_lname"
            type="text"
            required=""
            placeholder="Last Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_phoneNumber"
            >Phone Number (111-111-1111)</label
          >
          <input
            class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            v-model="phoneNumber"
            id="cus_phoneNumber"
            name="cus_phoneNumber"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required=""
            placeholder="Phone Number"
          />
        </div>
        <p class="text-gray-800 font-medium">Product information</p>
        <div class="block mt-2 -mx-1 pl-1">
          <label class="hidden block text-sm text-gray-600" for="cus_id"
            >ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_id"
            name="cus_id"
            type="number"
            required=""
            placeholder="ID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="productName"
            >Product Name</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="productName"
            id="productName"
            name="productName"
            type="text"
            required=""
            placeholder="Product Name"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_lname"
            >Price</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="productPrice"
            id="cus_lname"
            name="cus_lname"
            type="number"
            required=""
            placeholder="Price"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_phoneNumber"
            >Weight</label
          >
          <input
            class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            v-model="productWeight"
            id="cus_phoneNumber"
            name="cus_phoneNumber"
            type="number"
            required=""
            placeholder="Weight"
          />
        </div>
        <p class="text-gray-800 font-medium">Order information</p>
        <div class="block mt-2 -mx-1 pl-1">
          <label class="hidden block text-sm text-gray-600" for="cus_id"
            >ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_id"
            name="cus_id"
            type="number"
            required=""
            placeholder="ID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="customerID"
            >Customer ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="custID"
            id="customerID"
            name="customerID"
            type="number"
            required=""
            placeholder="Customer ID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_lname"
            >Product Number</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="poNumber"
            id="cus_lname"
            name="cus_lname"
            type="text"
            required=""
            placeholder="Product Numer"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_phoneNumber"
            >Order Date</label
          >
          <input
            class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            v-model="orderDate"
            id="cus_phoneNumber"
            name="cus_phoneNumber"
            type="text"
            required=""
            placeholder="Order Date"
          />
        </div>
        <p class="text-gray-800 font-medium">Cart information</p>
        <div class="block mt-2 -mx-1 pl-1">
          <label class="hidden block text-sm text-gray-600" for="cus_id"
            >Order ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="cartOrderID"
            id="cus_id"
            name="cus_id"
            type="number"
            required=""
            placeholder="Order ID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="productID"
            >Product ID</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="cartProdID"
            id="productID"
            name="productID"
            type="text"
            required=""
            placeholder="ProductID"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_lname"
            >Quantity</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            v-model="quantity"
            id="cus_lname"
            name="cus_lname"
            type="text"
            required=""
            placeholder="Quantity"
          />
        </div>
      </form>
      <button
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="searchInput"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import * as customerService from "@/services/customer.js";
import * as productService from "@/services/product.js";
import * as orderService from "@/services/order.js";
import * as cartService from "@/services/cart.js";
import ServicesConfig from "@/config/serviceURLs.json";

export default {
  data() {
    return {
      customerList: [],
      productList: [],
      orderList: [],
      cartList: [],
      firstName: "",
      lastName: "",
      phoneNumber: "",
      productName: "",
      productPrice: null,
      productWeight: null,
      orderID: 0,
      custID: 0,
      poNumber: "",
      orderDate: "",
      cartOrderID: "",
      cartProdID: "",
      quantity: 0,
      visible: false,
      filteredCustomerList: [],
      filteredProductList: [],
      filteredCartList: [],
      filteredOrderList: [],
    };
  },
  methods: {
    async searchInput() {
      let CustURL = ServicesConfig["CustomerService"];
      let ProdURL = ServicesConfig["ProductService"];
      let orderURL = ServicesConfig["OrderService"];
      let cartURL = ServicesConfig["CartService"];

      this.filteredCustomerList = [];
      this.filteredProductList = [];
      this.filteredCartList = [];
      this.filteredOrderList = [];


      if (this.firstName || this.lastName || this.phoneNumber) {
        // filter customer
        this.customerList = await customerService.getAllCustomers(CustURL);
        this.filteredCustomerList = this.customerList.filter(function(
          customer
        ) {
          if (this.firstName) {
            if (customer.firstName != this.firstName) {
              return false;
            }
          }
          if (this.lastName) {
            if (customer.lastName != this.lastName) {
              return false;
            }
          }
          if (this.phoneNumber) {
            if (customer.phoneNumber != this.phoneNumber) {
              return false;
            }
          }
          return true;
        },
        this);
      }

      if (this.productName || this.productPrice || this.productWeight) {
        // filter product
        this.productList = await productService.getAllProducts(ProdURL);
        //console.log('this is product list: ', this.productList);
        this.filteredProductList = this.productList.filter(function(product) {
          if (this.productName) {
            if (product.prodName != this.productName) {
              return false;
            }
          }
          if (this.productPrice) {
            if (product.price != this.productPrice) {
              return false;
            }
          }
          if (this.productWeight) {
            if (product.prodWeight != this.productWeight) {
              return false;
            }
          }
          return true;
        }, this);
      }

      if (this.orderID || this.custID || this.orderDate || this.poNumber) {
        // filter order
        this.orderList = Object.values(
          await orderService.getAllOrders(orderURL)
        );
        //console.log('this is order list: ', this.orderList);
        this.filteredOrderList = this.orderList.filter(function(order) {
          if (this.orderID) {
            if (order.orderID != this.orderID) {
              return false;
            }
          }
          if (this.custID) {
            if (order.CustomerID != this.custID) {
              return false;
            }
          }
          if (this.poNumber) {
            if (order.PONumber != this.poNumber) {
              return false;
            }
          }
          if (this.orderDate) {
            if (order.Date != this.orderDate) {
              return false;
            }
          }
          return true;
        }, this);
      }

      if (this.cartOrderID || this.cartProdID || this.quantity) {
        // filter cart
        this.cartList = Object.values(await cartService.getAllCarts(cartURL));
        this.filteredCartList = this.cartList.filter(function(cart) {
          if (this.cartOrderID) {
            if (cart.OrderID != this.cartOrderID) {
              return false;
            }
          }
          if (this.cartProdID) {
            if (cart.ProductID != this.cartProdID) {
              return false;
            }
          }
          if (this.quantity) {
            if (cart.quantity != this.quantity) {
              return false;
            }
          }
          return true;
        }, this);
      }

      
      console.log("customer", this.filteredCustomerList);
      console.log("product", this.filteredProductList);
      console.log("order", this.filteredOrderList);
      console.log("cart", this.filteredCartList);
      this.visible = true;
    },

    finallySearch(
      filteredCustomerList,
      filteredProductList,
      filteredOrderList,
      filteredCartList
    ) {
      let mergedArray = [
        ...filteredCustomerList,
        ...filteredProductList,
        ...filteredOrderList,
        ...filteredCartList
      ];
      console.log(mergedArray);
    }
  }
};
</script>

<style>
.our-modal {
    width:32rem;
}
</style>
