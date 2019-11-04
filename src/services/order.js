import axios from "axios";

/* METHOD		:   getOrderDetails
 * DESCRIPTION	:   Calls the Order REST API to get the details of the giving order id
 *
 * PARAMETERS	:   url, id (orderID)
 * RETURNS		:   JSON object of order record
 *
 */
export const getOrderDetails = async (url, id) => {
  const response = await axios.get(url + id);
  return response.data;
};

/* METHOD		:   updateOrder
 * DESCRIPTION	:   performs a PUT request to the Orders REST API to update the Order with the supplied OrderID
 *
 * PARAMETERS	:   url, id (orderID), CustomerID, PONumber, _Date
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const updateOrder = async (url, id, CustomerID, PONumber, _Date) => {
  const body = {
    CustomerID: CustomerID,
    PONumber: PONumber,
    Date: _Date
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.put(url + id, body, {
    headers: _headers
  });

  return response;
};

/* METHOD		:   addOrder
 * DESCRIPTION	:   performs a POST request to the Orders REST API to add a new Order record with the given data
 *
 * PARAMETERS	:   url, CustID, PONum, _Date
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const addOrder = async (url, CustID, PONum, _Date) => {
  const body = {
    CustomerID: CustID,
    PONumber: PONum,
    Date: _Date
  };

  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.post(url, body, {
    headers: _headers
  });

  return response.data;
};

/* METHOD		:   deleteOrder
 * DESCRIPTION	:   performs a DELETE request to the Orders REST API to delete the Order with the given id
 *
 * PARAMETERS	:   url, id
 * RETURNS		:   HTTP status code - 204 means update successful
 *
 */
export const deleteOrder = async (url, id) => {
  const _headers = {
    "content-type": "application/json"
  };

  const response = await axios.delete(url + id, {
    headers: _headers
  });

  return response.data;
};
