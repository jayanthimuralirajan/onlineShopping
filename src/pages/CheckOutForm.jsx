// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from './CartSlice';  // Assuming your clearCart action is in CartSlice

// // Step 1: Shipping Address Form
// function ShippingAddressForm({ formData, handleChange, nextStep, prevStep, errors }) {
//     return (
//         <div className="p-9 bg-white rounded-lg shadow-lg m-10">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Shipping Address</h2>
//             <form>
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-lg text-gray-700">Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
//                     </div>

//                     <div>
//                         <label className="block text-lg text-gray-700">City</label>
//                         <input
//                             type="text"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
//                     </div>

//                     <div>
//                         <label className="block text-lg text-gray-700">Zip Code</label>
//                         <input
//                             type="text"
//                             name="zip"
//                             value={formData.zip}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.zip && <span className="text-red-500 text-sm">{errors.zip}</span>}
//                     </div>

//                     <div className="flex justify-end ">
//                         <button
//                             type="button"
//                             onClick={nextStep}
//                             className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// // Step 2: Payment Method Form
// function PaymentMethodForm({ formData, handleChange, nextStep, prevStep, errors }) {
//     return (
//         <div className="p-9 bg-white rounded-lg shadow-lg m-10">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Payment Method</h2>
//             <form>
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-lg text-gray-700">Card Number</label>
//                         <input
//                             type="text"
//                             name="cardNumber"
//                             value={formData.cardNumber}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
//                     </div>

//                     <div>
//                         <label className="block text-lg text-gray-700">Expiration Date</label>
//                         <input
//                             type="text"
//                             name="expiryDate"
//                             value={formData.expiryDate}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate}</span>}
//                     </div>

//                     <div>
//                         <label className="block text-lg text-gray-700">CVV</label>
//                         <input
//                             type="text"
//                             name="cvv"
//                             value={formData.cvv}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                         {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
//                     </div>

//                     <div className="flex justify-between">
//                         <button
//                             type="button"
//                             onClick={prevStep}
//                             className="p-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
//                         >
//                             Back
//                         </button>
//                         <button
//                             type="button"
//                             onClick={nextStep}
//                             className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// // Step 3: Order Summary
// function OrderSummary({ formData, prevStep, submitOrder }) {
//   const user = useSelector((state) => state.User.loggedInUser);
//     return (
//         <div className="p-9 bg-white rounded-lg shadow-lg m-10">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Order Summary</h2>
//             <div>
//                 <p><b>Name:</b> {user.userName}</p>
//                 <p><b>Address:</b> {formData.address}, {formData.city}, {formData.zip}</p>
//                 <p><b>Card Number:</b> **** **** **** {formData.cardNumber.slice(-4)}</p>
//                 <p><b>Expiration:</b> {formData.expiryDate}</p>
//                 <div className='flex justify-center'>
//                 <button
//                     onClick={submitOrder}
//                     className="mt-4 p-3 ml-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
//                 >
//                     Place Order
//                 </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function CheckOutForm() {
//     const dispatch = useDispatch(); // Get dispatch function
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         address: '',
//         city: '',
//         zip: '',
//         cardNumber: '',
//         expiryDate: '',
//         cvv: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isOrderPlaced, setIsOrderPlaced] = useState(false);  // To track order status
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const nextStep = () => {
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             setStep((prevStep) => prevStep + 1);
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     const prevStep = () => {
//         setStep((prevStep) => prevStep - 1);
//     };

//     const validate = () => {
//         const errors = {};
//         if (step === 1) {
//             if (!formData.address) errors.address = 'Address is required';
//             if (!formData.city) errors.city = 'City is required';
//             if (!formData.zip) errors.zip = 'Zip Code is required';
//         }
//         if (step === 2) {
//             if (!formData.cardNumber) errors.cardNumber = 'Card number is required';
//             if (!formData.expiryDate) errors.expiryDate = 'Expiration date is required';
//             if (!formData.cvv) errors.cvv = 'CVV is required';
//         }
//         return errors;
//     };

//     const submitOrder = () => {
//         // Dispatch clearCart action after order submission
//         dispatch(clearCart());
//         setIsOrderPlaced(true); // Mark the order as placed
//         console.log('Order submitted:', formData);

        
//     };

//     // If the order is placed, do not show the checkout form
//     if (isOrderPlaced) {
//         return (
//             <div className="p-9 text-center text-2xl font-semibold text-green-600">
//                 Thank you for your order! Your order has been successfully placed.
//             </div>
//         );
//     }

//     return (
//         <div>
//             {step === 1 && (
//                 <ShippingAddressForm
//                     formData={formData}
//                     handleChange={handleChange}
//                     nextStep={nextStep}
//                     errors={errors}
//                 />
//             )}
//             {step === 2 && (
//                 <PaymentMethodForm
//                     formData={formData}
//                     handleChange={handleChange}
//                     nextStep={nextStep}
//                     prevStep={prevStep}
//                     errors={errors}
//                 />
//             )}
//             {step === 3 && (
//                 <OrderSummary
//                     formData={formData}
//                     prevStep={prevStep}
//                     submitOrder={submitOrder}
//                 />
//             )}
//         </div>
//     );
// }

// export default CheckOutForm;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice'; // Assuming your clearCart action is in CartSlice

// Step 1: Shipping Address Form
function ShippingAddressForm({ formData, handleChange, nextStep, prevStep, errors }) {
    return (
        <div className="p-9 bg-white rounded-lg shadow-lg m-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Shipping Address</h2>
            <form>
                <div className="space-y-4">
                    <div>
                        <label className="block text-lg text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
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
                            className="w-full p-2 border rounded-lg"
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
                            className="w-full p-2 border rounded-lg"
                        />
                        {errors.zip && <span className="text-red-500 text-sm">{errors.zip}</span>}
                    </div>

                    <div className="flex justify-end ">
                        <button
                            type="button"
                            onClick={nextStep}
                            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Step 2: Payment Method Form
function PaymentMethodForm({ formData, handleChange, nextStep, prevStep, errors }) {
    return (
        <div className="p-9 bg-white rounded-lg shadow-lg m-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Payment Method</h2>
            <form>
                <div className="space-y-4">
                    <div>
                        <label className="block text-lg text-gray-700">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
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
                            className="w-full p-2 border rounded-lg"
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
                            className="w-full p-2 border rounded-lg"
                        />
                        {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="p-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Step 3: Order Summary
function OrderSummary({ formData, prevStep, submitOrder, totalItems, subtotal }) {
    const user = useSelector((state) => state.User.loggedInUser);

    return (
        <div className="p-9 bg-white rounded-lg shadow-lg m-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Order Summary</h2>
            <div>
                <p><b>Name:</b> {user.userName}</p>
                <p><b>Address:</b> {formData.address}, {formData.city}, {formData.zip}</p>
                <p><b>Card Number:</b> **** **** **** {formData.cardNumber.slice(-4)}</p>
                <p><b>Expiration:</b> {formData.expiryDate}</p>
                <p><b>Total Cart Items:</b> {totalItems}</p>  {/* Display the total number of items */}
                <p><b>Subtotal:</b> ${subtotal.toFixed(2)}</p>  {/* Display the subtotal amount */}
                <div className="flex justify-center">
                    <button
                        onClick={submitOrder}
                        className="mt-4 p-3 ml-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

function CheckOutForm() {
    const dispatch = useDispatch(); // Get dispatch function
    const cart = useSelector((state) => state.Cart.cart); // Get cart items
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);  // To track order status
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const nextStep = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setStep((prevStep) => prevStep + 1);
        } else {
            setErrors(validationErrors);
        }
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const validate = () => {
        const errors = {};
        if (step === 1) {
            if (!formData.address) errors.address = 'Address is required';
            if (!formData.city) errors.city = 'City is required';
            if (!formData.zip) errors.zip = 'Zip Code is required';
        }
        if (step === 2) {
            if (!formData.cardNumber) errors.cardNumber = 'Card number is required';
            if (!formData.expiryDate) errors.expiryDate = 'Expiration date is required';
            if (!formData.cvv) errors.cvv = 'CVV is required';
        }
        return errors;
    };

    const submitOrder = () => {
        // Dispatch clearCart action after order submission
        dispatch(clearCart());
        setIsOrderPlaced(true); // Mark the order as placed
        console.log('Order submitted:', formData);
    };

    // Calculate total items and subtotal
    const totalItems = cart.length;
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

    // If the order is placed, do not show the checkout form
    if (isOrderPlaced) {
        return (
            <div className="p-9 text-center text-2xl font-semibold text-green-600">
                Thank you for your order! Your order has been successfully placed.
            </div>
        );
    }

    return (
        <div>
            {step === 1 && (
                <ShippingAddressForm
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    errors={errors}
                />
            )}
            {step === 2 && (
                <PaymentMethodForm
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    errors={errors}
                />
            )}
            {step === 3 && (
                <OrderSummary
                    formData={formData}
                    prevStep={prevStep}
                    submitOrder={submitOrder}
                    totalItems={totalItems}
                    subtotal={subtotal}
                />
            )}
        </div>
    );
}

export default CheckOutForm;
