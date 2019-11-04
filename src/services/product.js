import axios from "axios";

/* METHOD		:   getAllProducts
 * DESCRIPTION	:   Calls the Product REST API to get a JSON object of all products
 *
 * PARAMETERS	:   url of API
 * RETURNS		:   JSON object containing all product records from API
 *
 */
export const getAllProducts = async url => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

/* METHOD		:   getProductDetails
 * DESCRIPTION	:   Calls the Product REST API to get the details of the giving Product id
 *
 * PARAMETERS	:   url, id (prodID)
 * RETURNS		:   JSON object of Product record
 *
 */
export const getProductDetails = async (url, id) => {
  const response = await axios.get(url + id);
  return response.data;
};

/* METHOD		:   updateProduct
 * DESCRIPTION	:   performs a PUT request to the product REST API to update the product with the supplied ProductID
 *
 * PARAMETERS	:   url, id (prodID), prodName, price, prodWeight, inStock
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const updateProduct = async (
  url,
  id,
  prodName,
  price,
  prodWeight,
  inStock
) => {
  const body = {
    prodId: id,
    prodName: prodName,
    price: price,
    prodWeight: prodWeight,
    inStock: inStock
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.put(url + id, body, {
    headers: _headers
  });

  return response;
};

/* METHOD		:   addProduct
 * DESCRIPTION	:   performs a POST request to the Products REST API to add a new Product record with the given data
 *
 * PARAMETERS	:   url, prodName, price, prodWeight, inStock
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const addProduct = async (url, prodName, price, prodWeight, inStock) => {
  const body = {
    prodName: prodName,
    price: price,
    prodWeight: prodWeight,
    inStock: inStock
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.post(url, body, {
    headers: _headers
  });

  return response.data;
};

/* METHOD		:   deleteProduct
 * DESCRIPTION	:   performs a DELETE request to the Products REST API to delete the Product with the given id
 *
 * PARAMETERS	:   url, id
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const deleteProduct = async (url, id) => {
  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.delete(url + id, {
    headers: _headers
  });

  return response.data;
};
