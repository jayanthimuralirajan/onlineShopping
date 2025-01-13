


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice'; 

function CheckoutForm({ user, formData, handleChange, errors, setFormCompleted }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormCompleted(true);
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-8 pl-4">
                    <div className="">
                        {console.log(user)}
                        <h3 className="text-xl mb-2 mt-2 text-gray-700 font-semibold">Personal Details</h3>
                        <div className="space-y-4">
                            <p><b>Name:</b> {user.userName}</p>
                            <p><b>Email:</b> {user.email}</p>
                        </div>
                        <h3 className="text-xl mb-2 mt-4 text-gray-700 font-semibold">Shipping Address</h3>
                        <div>
                            <label className="block text-lg text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Zip Code</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.zip && <span className="text-red-500 text-sm">{errors.zip}</span>}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-xl mb-2 mt-4 text-gray-700 font-semibold">Payment Method</h3>
                        <div>
                            <label className="block text-lg text-gray-700">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Expiration Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                className="w-2/3 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Continue to Order Summary
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}


function OrderSummary({ formData, submitOrder, totalItems, subtotal, user }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Order Summary</h2>
            <div className="space-y-4">
                <p><b>Name:</b> {user.userName}</p>
                <p><b>Address:</b> {formData.address}, {formData.city}, {formData.zip}</p>
                <p><b>Card Number:</b> **** **** **** {formData.cardNumber.slice(-4)}</p>
                <p><b>Expiration:</b> {formData.expiryDate}</p>
                <p><b>Total Cart Items:</b> {totalItems}</p>
                <p><b>Subtotal:</b> ${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-center mt-6">
                <button
                    onClick={submitOrder}
                    className="p-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}

function CheckOutForm() {
    const dispatch = useDispatch(); 
    const cart = useSelector((state) => state.Cart.cart); 
    const user = useSelector((state) => state.User.loggedInUser); 

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [formCompleted, setFormCompleted] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validate = () => {
        const errors = {};
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';
        if (!formData.zip) errors.zip = 'Zip Code is required';
        if (!formData.cardNumber) errors.cardNumber = 'Card number is required';
        if (!formData.expiryDate) errors.expiryDate = 'Expiration date is required';
        if (!formData.cvv) errors.cvv = 'CVV is required';
        return errors;
    };

    const submitOrder = () => {
      
        dispatch(clearCart());
        setIsOrderPlaced(true); 
        console.log('Order submitted:', formData);
    };

  
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    if (isOrderPlaced) {
        return (
            <div className="p-9 text-center text-2xl font-semibold text-green-600">
                Thank you for your order! Your order has been successfully placed.
            </div>
        );
    }

    return (
        <div>
            {!formCompleted && (
                <CheckoutForm
                    user={user}
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    setFormCompleted={setFormCompleted}
                />
            )}
            {formCompleted && (
                <OrderSummary
                    formData={formData}
                    submitOrder={submitOrder}
                    totalItems={totalItems}
                    subtotal={subtotal}
                    user={user}
                />
            )}
        </div>
    );
}

export default CheckOutForm;
