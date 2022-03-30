import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, ImageContainer, COItemName, COItemQuantity, COItemPrice, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart  } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <COItemName>{name}</COItemName>
      <COItemQuantity>
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </COItemQuantity>
      <COItemPrice>{price}</COItemPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
};

export default CheckoutItem;
