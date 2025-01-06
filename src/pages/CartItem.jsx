import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteItem } from './CartSlice';


function CartItem({ item }) {
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(deleteItem(item.id));
  }
  return (
    <li className=" sm:flex sm:items-center sm:justify-between">
      <div className="py-3 relative w-5/6 mb-1 flex sm:mb-0 border-b pb-6">
      <button
          onClick={handleDelete}
          className="absolute end-0 mt-7   hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon
            icon={faTrash}
            size="l"
            style={{ cursor: 'pointer', color:'red' }}
          />
        </button>
        <img src={item.image} className='w-14 mr-2'/>
        <div>
        <p><b>Product:</b>{item.title}</p>
        <p><b>Price:</b>${item.price}</p>
        </div>
      </div>
      
    </li>
  );
}

export default CartItem;



