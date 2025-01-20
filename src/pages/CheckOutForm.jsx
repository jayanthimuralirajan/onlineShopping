

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice'; 
import { useLocation } from 'react-router-dom';

function CheckoutForm({ user, formData, handleChange, errors, setFormCompleted }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormCompleted(true);
    };

    return (
        <div className="p-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg shadow-xl w-4/5 mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="pl-4">
                    <h3 className="text-xl mb-2 mt-2 text-white font-semibold">Personal Details</h3>
                    <div className="space-y-4 border-b-2 pb-3 border-white">
                        <p className='text-white'><b>Name:</b> {user.userName}</p>
                        <p className='text-white'><b>Email:</b> {user.email}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl mb-2 mt-4 text-white font-semibold">Shipping Address</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-lg text-white">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                            </div>

                            <div>
                                <label className="block text-lg text-white">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                            </div>

                            <div>
                                <label className="block text-lg text-white">Zip Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.zip && <span className="text-red-500 text-sm">{errors.zip}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl mb-2 mt-4 text-white font-semibold">Payment Method</h3>

                        <div>
                            <label className="block text-lg text-white">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-white">Expiration Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate}</span>}
                        </div>

                        <div>
                            <label className="block text-lg text-white">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                className="w-2/3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Continue to Order Summary
                    </button>
                </div>
            </form>
        </div>
    );
}

function OrderSummary({ formData, submitOrder, totalItems, subtotal, user }) {
    return (
        <div className="p-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-lg shadow-xl max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Order Summary</h2>
            <div className="space-y-4 text-white">
                <p><b>Name:</b> {user.userName}</p>
                <p><b>Address:</b> {formData.address}, {formData.city}, {formData.zip}</p>
                <p><b>Card Number:</b> **** **** **** {formData.cardNumber.slice(-4)}</p>
                <p><b>Expiration:</b> {formData.expiryDate}</p>
                <p><b>Total Items:</b> {totalItems}</p>
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
    const location = useLocation();

    const { product } = location.state || {};
    console.log(product);
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

    const submitSingleOrder = () => {
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
            {formCompleted && !product && (
                <OrderSummary
                    formData={formData}
                    submitOrder={submitOrder}
                    totalItems={totalItems}
                    subtotal={subtotal}
                    user={user}
                />
            )}
            {formCompleted && product && (
                <OrderSummary 
                    formData={formData}
                    submitOrder={submitSingleOrder}
                    totalItems={product.quantity}
                    subtotal={product.quantity * product.price}
                    user={user}
                />
            )}
        </div>
    );
}

export default CheckOutForm;

