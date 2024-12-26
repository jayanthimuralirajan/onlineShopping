import { useSelector } from 'react-redux';


function CartItem({ item }) {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <div className="mb-1 flex sm:mb-0 border-b pb-6">
        <img src={item.image} className='w-14 mr-2'/>
        <div>
        <p>Product:{item.title}</p>
        <p>Price:{item.price}</p>
        </div>
      </div>
      
    </li>
  );
}

export default CartItem;