import React from "react";
import "../Style/MyOrders.css";

const MyOrders = () => {

const orders =
JSON.parse(localStorage.getItem("orders")) || [];

if(orders.length===0){

return(

<div className="orders-empty">

<h2>No Orders Yet 😔</h2>

<p>Place your first order.</p>

</div>

);

}

return(

<div className="orders-container">

<h1>📦 My Orders</h1>

{

orders.map((order,index)=>(

<div
className="order-card"
key={index}
>
<h6 style={{color:"red"}}>

Order ID:
{order.orderId}

</h6>

<p>

<b>Name :</b>

{order.customer.name}

</p>

<p>

<b>Phone :</b>

{order.customer.phone}

</p>

<p>

<b>Date :</b>

{order.orderDate}

</p>

<p>

<b>Payment :</b>

{order.paymentMethod}

</p>

<p>

<b>Status :</b>

{order.orderStatus}

</p>

<p>

<b>Total :</b>

₹{order.totalPrice}

</p>

<p>

<b>Delivery Status :</b>

{order.deliveryStatus}

</p>

<p>

<b>Payment :</b>

{order.paymentStatus}

</p>

<hr/>


<h4>Products</h4>

{

order.items.map((item)=>(

<div
key={item.id}
className="order-product"
>

<img
src={item.image}
alt={item.name}
/>

<div>

<h5>{item.name}</h5>

<p>

₹{item.price}

×

{item.quantity}

</p>

</div>

</div>

))

}

</div>

))

}

</div>

);

};

export default MyOrders;