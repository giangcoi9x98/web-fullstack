import React, { Component, useEffect, useState } from 'react';
import Items from './Items';
import api from '../../../../api';
import noti from '../../../../component/Notificator';
export default function Order(props) {
  const [orders, setorders] = useState({});
  const [orderId, setorderId] = useState(window.location.pathname.split('/')[3])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await api.order.getById(orderId);
        console.log(order);
        if (order.status) {
          await setorders(order.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Items
        orders={orders}     
      ></Items>
    </div>
  );
}