
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const HandleClearCart = () => {
        dispatch(clearCart());
        // Dispatch an action to clear the cart
        // Assuming you have a clearCart action in your cartSlice
        // dispatch(clearCart());
    };
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex1 justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4 ml-4">Your Cart</h1>
            <button className="p-2 bg-black text-white rounded-lg mb-4 ml-4"
            onClick={HandleClearCart}
            >Clear cart</button>
            <ItemList items={cartItems} dummy={false} />
        </div>
    );
}
export default Cart;