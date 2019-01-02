/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 3.0.0
 * @author Emmanuel Frimpong
 * @license MIT
 * 
 **/

class EasyHTTP {
  // Get data
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  // Post data
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  
  }
  // Update data
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  
  }
  // Delete data
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource deleted';
    return resData;
  }
}

export const http = new EasyHTTP();