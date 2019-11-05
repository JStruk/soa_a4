<template>
  <div class="flex justify-center">
 <div class="inline-block">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Customer information</p>
    <div class="block mt-2 -mx-1 pl-1">
      <label class="hidden block text-sm text-gray-600" for="cus_id">ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_id"  name="cus_id" type="number" required="" placeholder="ID">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_fname">First Name</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_fname" name="cus_fname" type="text" required="" placeholder="First Name">
    </div>
     <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_lname">Last Name</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_lname" name="cus_lname" type="text" required="" placeholder="Last Name">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_phoneNumber">Phone Number (111-111-1111)</label>
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_phoneNumber" name="cus_phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  required="" placeholder="Phone Number">
    </div>
    <p class="text-gray-800 font-medium">Product information</p>
    <div class="block mt-2 -mx-1 pl-1">
      <label class="hidden block text-sm text-gray-600" for="cus_id">ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_id"  name="cus_id" type="number" required="" placeholder="ID">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_fname">Product Name</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_fname" name="cus_fname" type="text" required="" placeholder="Product Name">
    </div>
     <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_lname">Price</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_lname" name="cus_lname" type="text" required="" placeholder="Price">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_phoneNumber">Weight</label>
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_phoneNumber" name="cus_phoneNumber" type="text" required="" placeholder="Weight">
    </div>
     <p class="text-gray-800 font-medium">Order information</p>
    <div class="block mt-2 -mx-1 pl-1">
      <label class="hidden block text-sm text-gray-600" for="cus_id">ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_id"  name="cus_id" type="number" required="" placeholder="ID">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_fname">Customer ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_fname" name="cus_fname" type="number" required="" placeholder="Customer ID">
    </div>
     <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_lname">Product Number</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_lname" name="cus_lname" type="text" required="" placeholder="Product Numer">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_phoneNumber">Order Date</label>
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_phoneNumber" name="cus_phoneNumber" type="text" required="" placeholder="Order Date">
    </div>
    <p class="text-gray-800 font-medium">Cart information</p>
    <div class="block mt-2 -mx-1 pl-1">
      <label class="hidden block text-sm text-gray-600" for="cus_id">Order ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_id"  name="cus_id" type="number" required="" placeholder="ID">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_fname">Product ID</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_fname" name="cus_fname" type="text" required="" placeholder="Customer ID">
    </div>
     <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_lname">Quantity</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_lname" name="cus_lname" type="text" required="" placeholder="Product Numer">
    </div>
  </form>
  <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Search
</button>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>