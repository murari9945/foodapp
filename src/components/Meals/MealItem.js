import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const MealItem=(props)=>{
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });
      };
    return(
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>
            </div>
            <div>
                <MealForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )


}
export default MealItem;