import axios from "axios";

/* METHOD		:   getAllCustomers
 * DESCRIPTION	:   Calls the Customers REST API to get a JSON object of all customers
 *
 * PARAMETERS	:   url of API
 * RETURNS		:   JSON object containing all customer records from API
 *
 */
export const getAllCustomers = async url => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

/* METHOD		:   getCustomerDetails
 * DESCRIPTION	:   Calls the Customers REST API to get the details of the giving customer id
 *
 * PARAMETERS	:   url, id (custID)
 * RETURNS		:   JSON object of custom record
 *
 */
export const getCustomerDetails = async (url, id) => {
  const response = await axios.get(url + id);
  return response.data;
};

/* METHOD		:   updateCustomer
 * DESCRIPTION	:   performs a PUT request to the Customers REST API to update the customer with the supplied CustomerID
 *
 * PARAMETERS	:   url, id (custID), firstName, lastName, phoneNumber
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const updateCustomer = async (
  url,
  id,
  firstName,
  lastName,
  phoneNumber
) => {
  const body = {
    custID: id,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.put(url + id, body, {
    headers: _headers
  });

  return response;
};

/* METHOD		:   addCustomer
 * DESCRIPTION	:   performs a POST request to the Customers REST API to add a new customer record with the given data
 *
 * PARAMETERS	:   url, firstName, lastName, phoneNumber
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const addCustomer = async (url, firstName, lastName, phoneNumber) => {
  const body = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.post(url, body, {
    headers: _headers
  });

  return response.data;
};

/* METHOD		:   deleteCustomer
 * DESCRIPTION	:   performs a DELETE request to the Customers REST API to delete the customer with the given id
 *
 * PARAMETERS	:   url, firstName, lastName, phoneNumber
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const deleteCustomer = async (url, id) => {
  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.delete(url + id, {
    headers: _headers
  });

  return response.data;
};
