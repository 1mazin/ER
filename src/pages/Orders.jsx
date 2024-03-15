import React, { useState } from 'react';
import { getOrders, setOrders } from '../data/ordersItem'; // Import getOrders and setOrders from data.js

const OrdersManagement = () => {
  const ordersData = getOrders(); // Fetch initial orders data

  const [orders, setOrdersState] = useState(ordersData); // Initialize orders state with initial data
  const [selectedOrder, setSelectedOrder] = useState(null);

  const markCompleted = (id) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, completed: true, status: 'Completed' };
      }
      return order;
    });
    setOrdersState(updatedOrders); // Update the orders state
    setOrders(updatedOrders); // Update the orders data in data.js
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrdersState(updatedOrders); // Update the orders state
    setOrders(updatedOrders); // Update the orders data in data.js
  };

  const viewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Orders Management</h2>
      {selectedOrder && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Order Details</h3>
                <p className="text-sm text-gray-500">Product : {selectedOrder.productName}</p>
                <p className="text-sm text-gray-500">Order Date: {selectedOrder.date}</p>
                <p className="text-sm text-gray-500">Customer Name: {selectedOrder.customer}</p>
                <p className="text-sm text-gray-500">Status: {selectedOrder.completed ? 'Completed' : 'Pending'}</p>
                <p className="text-sm text-gray-500">Details: {selectedOrder.details}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.productName}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">{order.completed ? 'Completed' : 'Pending'}</td>
              <td className="border px-4 py-2">
                {!order.completed && (
                  <>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => markCompleted(order.id)}>Mark as Completed</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteOrder(order.id)}>Delete</button>
                  </>
                )}
              </td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => viewDetails(order)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersManagement;
