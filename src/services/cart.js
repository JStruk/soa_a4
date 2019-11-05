import axios from "axios";

/* METHOD		:   getAllCarts
 * DESCRIPTION	:   Calls the Carts REST API to get a JSON object of all Carts
 *
 * PARAMETERS	:   url of API
 * RETURNS		:   JSON object containing all Cart records from API
 *
 */
export const getAllCarts = async url => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

/* METHOD		:   getCartDetails
 * DESCRIPTION	:   Calls the Carts REST API to get the details of the given Cart id
 *
 * PARAMETERS	:   url, id (custID)
 * RETURNS		:   JSON object of custom record
 *
 */
export const getCartDetails = async (url, orderID) => {
  const response = await axios.get(url + orderID);
  return response.data;
};

/* METHOD		:   getCartDetails
 * DESCRIPTION	:   Calls the Carts REST API to get the details of the given Cart id and prodID
 *
 * PARAMETERS	:   url, id (custID)
 * RETURNS		:   JSON object of custom record
 *
 */
export const getCartDetailsBasedOnOrderAndProduct = async (
  url,
  orderID,
  prodID
) => {
  const response = await axios.get(
    url + "?orderID=" + orderID + "&productID=" + prodID
  );
  return response.data;
};

/* METHOD		:   updateCart
 * DESCRIPTION	:   performs a PUT request to the Carts REST API to update the Cart with the supplied CartID
 *
 * PARAMETERS	:   url, id (custID), firstName, lastName, phoneNumber
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const updateCart = async (url, orderID, prodID, quantity) => {
  const body = {
    OrderID: orderID,
    ProductID: prodID,
    Quantity: quantity
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.put(url + orderID, body, {
    headers: _headers
  });

  return response;
};

/* METHOD		:   addCart
 * DESCRIPTION	:   performs a POST request to the Carts REST API to add a new Cart record with the given data
 *
 * PARAMETERS	:   url, firstName, lastName, phoneNumber
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const addCart = async (url, OrderID, ProductID, Quantity) => {
  const body = {
    OrderID: OrderID,
    ProductID: ProductID,
    Quantity: Quantity
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.post(url, body, {
    headers: _headers
  });

  return response.data;
};

/* METHOD		:   deleteCart
 * DESCRIPTION	:   performs a DELETE request to the Carts REST API to delete the Cart with the given id
 *
 * PARAMETERS	:   url, OrderID, ProductID
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const deleteCart = async (url, _OrderID, _ProductID) => {
  const body = {
    OrderID: _OrderID
  };

  console.log(_ProductID);
  console.log(url);
  console.log(body);

  const _headers = {
    "Content-Type": "application/json"
  };

  console.log(_headers);

  const response = await axios.delete(url, body, {
    headers: _headers
  });
  
  return response.data;
};
