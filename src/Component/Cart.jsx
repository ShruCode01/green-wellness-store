import React from "react";
import { useCart } from "./CartContext";
import "../Style/Cart.css";
import Cartupi from "./Cartupi";

const Cart = () => {
  const {
    cartItems,
    totalItems,
    totalPrice,
    removeFromCart,
    addToCart,
    removeOne,
  } = useCart();


  const [customer, setCustomer] = React.useState({
    name:"",
    phone:"",
    email:"",
    address:"",
    pin:""
});
 
  const [paymentMethod, setPaymentMethod] = React.useState(""); // initially empty
  const [showUPI, setShowUPI] = React.useState(false);

  React.useEffect(() => {
    setShowUPI(paymentMethod === "UPI");
  }, [paymentMethod]);


  const orderOnWhatsApp = () => {
    if(!customer.name){

alert("Enter Name");

return;

}
if(cartItems.length===0){

alert("Cart is Empty");

return;

}
if(paymentMethod===""){

alert("Select Payment Method");

return;

}
if (customer.phone.trim() === "") {
  alert("Please enter your phone number.");
  return;
}
if (customer.phone.length !== 10) {
  alert("Phone number must be 10 digits.");
  return;
}
if (!customer.email.includes("@")) {
  alert("Please enter a valid email.");
  return;
}
if (customer.address.trim() === "") {
  alert("Please enter your address.");
  return;
}
if (customer.pin.length !== 6) {
  alert("Pin code must be 6 digits.");
  return;
}
const oldOrders =
JSON.parse(localStorage.getItem("orders")) || [];

const order = {

customer,

items: cartItems,

totalItems,

totalPrice,

paymentMethod,
paymentStatus:
paymentMethod==="UPI"
? "Pending"
: "Pending (COD)",

orderStatus:"Placed",

orderDate: Date.now()

};
localStorage.setItem(
  "latestOrder",
  JSON.stringify(order)
);

oldOrders.push(order);
localStorage.setItem(
"orders",
JSON.stringify(oldOrders)
);
alert("Order Placed Successfully");
console.log(order);


}
  function gohome() {
    window.location.href = "/";
  }
  
  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Your Shopping Cart</h2>

      <div className="cart-grid">
        {/* ✅ Show Products section only when payment is not selected */}
        
          <div className="cart-card">
            <h3>
              <i className="bi bi-bag-fill"></i> Products
            </h3>
            <ul className="list-group products-scroll-box">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-product-card">
                  <div className="cart-product-left">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-product-img"
                    />

                    <div>
                      <h5 className="prod-name">{item.name}</h5>
                      <p className="prod-price">
  ₹{item.price} × {item.quantity}
</p>

<h6 style={{ color: "green", fontWeight: "bold" }}>
  Total: ₹{item.price * item.quantity}
</h6>

                      <div className="qty-box">
                        <button
                          className="qty-btn"
                          onClick={() => removeOne(item.id)}
                        >
                          -
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-pill-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </ul>
          </div>
        

        {/* 🧍 Customer Details and Payment Options */}
        <div className="cart-card">
          <h3>
            <i className="bi bi-person-fill fs-4 iconicp"></i> Customer Details
          </h3>

          <div className="input-group">
           <input
value={customer.name}
onChange={(e)=>
setCustomer({
...customer,
name:e.target.value
})
}
/>
            <label>
              <i className="bi bi-person-fill icon"></i> Your Name
            </label>
          </div>

          <div className="input-group">
            <input
           
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value
                })
              }
              required
            />
            <label>
              <i className="bi bi-telephone-fill"></i> Phone Number
            </label>
          </div>

          <div className="input-group">
         <input
value={customer.email}
onChange={(e)=>
setCustomer({
...customer,
email:e.target.value
})
}
/>
            <label>
              <i className="bi bi-envelope-fill icon"></i> Your Email
            </label>
          </div>

          <div className="input-group">
          <input
value={customer.address}
onChange={(e)=>
setCustomer({
...customer,
address:e.target.value
})
}
/>
            <label>
              <i className="bi bi-geo-alt-fill"></i> Delivery Address
            </label>
          </div>

          <div className="input-group">
         <input
value={customer.pin}
onChange={(e)=>
setCustomer({
...customer,
pin:e.target.value
})
}
/>
            <label>
              <i className="bi bi-geo-fill"></i> Pin Code
            </label>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Payment Method
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("COD")}
                >
                  Cash On Delivery
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("UPI")}
                >
                  UPI
                </button>
              </li>
            </ul>
          </div>

          <div className="cart-card-footer">
            <img
                src={`${import.meta.env.BASE_URL}deliver.jpeg`}
              alt="Decorative footer"
              className="cart-footer-img"
            />
          </div>
        </div>

        {/* ✅ Order Summary / UPI Section */}
        {!showUPI ? (
          <div className="cart-card">
            <h3>
              <i className="bi bi-cash"></i> Order Summary
            </h3>
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ₹{totalPrice}</h5>
            <p style={{ color: "green" }}>
              <i className="bi bi-truck"></i> Free delivery within 2/3 hours
            </p>
            <button onClick={orderOnWhatsApp} className="cart-btn">
              <i className="bi bi-whatsapp"></i> Order on WhatsApp
            </button>
            <button
              onClick={gohome}
              className="cart-btn "
              style={{ backgroundColor: "black" }}
            >
              {" "}
              <i className="bi bi-arrow-left"></i> Back To Home
            </button>
          </div>
        ) : (
          <Cartupi />
        )}
      </div>
    </div>
  );
};

export default Cart;