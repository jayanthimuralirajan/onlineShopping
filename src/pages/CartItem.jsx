// import { useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { deleteItem } from './CartSlice';


// function CartItem({ item }) {
//   const dispatch=useDispatch();
//   const handleDelete=()=>{
//     dispatch(deleteItem(item.id));
//   }
//   return (
//     <li className=" sm:flex sm:items-center sm:justify-between">
//       <div className="py-3 relative w-5/6 mb-1 flex sm:mb-0 border-b pb-6">
//       <button
//           onClick={handleDelete}
//           className="absolute end-0 mt-7   hover:scale-110 transition-transform"
//         >
//           <FontAwesomeIcon
//             icon={faTrash}
//             size="l"
//             style={{ cursor: 'pointer', color:'red' }}
//           />
//         </button>
//         <img src={item.image} className='w-14 mr-2'/>
//         <div>
//         <p><b>Product:</b>{item.title}</p>
//         <p><b>Price:</b>${item.price}</p>
//         </div>
//       </div>
      
//     </li>
//   );
// }

// export default CartItem;



import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteItem, incrementItem, decrementItem } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  const handleIncrement = () => {
    dispatch(incrementItem(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-200 sm:flex-row flex-col">
      <div className="flex items-center space-x-4 w-full sm:w-auto relative">
        
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{item.title}</p>
          <p className="text-sm text-gray-600">${item.price}</p>
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>
          <div className='absolute bottom-0 right-0'>
          <button
          onClick={handleDelete}
          className="ml-auto text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
        </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;




