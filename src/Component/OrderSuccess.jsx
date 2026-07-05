import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {

const order =
JSON.parse(localStorage.getItem("latestOrder"));

if(!order){

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>No Order Found</h2>

<Link to="/">Go Home</Link>

</div>

);

}

return (

<div className="success-container">

<div className="success-card">

<h1>🎉 Order Placed Successfully</h1>

<h3>Thank You For Shopping</h3>

<hr/>

<p>

<b>Name :</b>

{order.customer.name}

</p>

<p>

<b>Phone :</b>

{order.customer.phone}

</p>

<p>

<b>Email :</b>

{order.customer.email}

</p>

<p>

<b>Address :</b>

{order.customer.address}

</p>

<p>

<b>PIN :</b>

{order.customer.pin}

</p>

<hr/>

<p>

<b>Total Items :</b>

{order.totalItems}

</p>

<p>

<b>Total Price :</b>

₹{order.totalPrice}

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

<b>Date :</b>

{order.orderDate}

</p>

<Link to="/">

<button>

Continue Shopping

</button>

</Link>

</div>

</div>

);

};

export default OrderSuccess;