import './CartItem.scss';
import firstImg from '../../assets/images/img1.png';
import bin from '../../assets/icons/bin.svg';
import { useDispatch } from 'react-redux';
import {selectedDelete} from '../cartItem/cartItemSlice';
const CartItem=({data})=>{

    const {price,title,counter,id}=data;
    const dispatch=useDispatch();

    let shortTitle=title.split(' ').slice(-3).join(' ')[0].toUpperCase() + title.split(' ').slice(-3).join(' ').slice(1);
    return(
        <div className='cart_item'>
            <div className="cart_item_img">
                <img src={firstImg} alt="first" />
            </div>
            <div className="cart_item_info">
                <div className="cart_item_info_title">{shortTitle.slice(0,21)}</div>
                <div className="cart_item_info_calculation">${price} x {counter}</div>
                <div className="cart_item_info_price">${price*counter}</div>
            </div>
            <button className="cart_item_bin"
                onClick={()=>dispatch(selectedDelete(id))}
            >
                <img src={bin} alt="bin icon" />
            </button>
        </div>
    )
}


export default CartItem;