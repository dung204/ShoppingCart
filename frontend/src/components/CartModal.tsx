import { useState } from 'react';
import { Badge, Button, Card, Modal } from 'react-bootstrap';
import { useCustomer } from '@/hooks';
import { convertToCurrency } from '@/utils';
import AddedItem from './AddedItem';
import { Link } from 'react-router-dom';

// Also known as: floating cart
function CartModal() {
  const [showCart, setShowCart] = useState(false);
  const { addedItems } = useCustomer();
  const countAddedItems = addedItems.length;
  const totalPrice = addedItems.reduce(
    (prev, curr) => prev + curr.numberAdded * curr.price,
    0
  );

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Button
        variant='warning'
        className='p-3 rounded-pill position-fixed bottom-0 end-0'
        onClick={handleShowCart}
      >
        {countAddedItems !== 0 && (
          <Badge
            bg='danger'
            className='position-absolute top-0 start-0 rounded-pill'
          >
            {countAddedItems}
          </Badge>
        )}
        <img src='/cart-logo.svg' alt='Cart' width={40} />
      </Button>

      <Modal show={showCart} onHide={handleHideCart} size='lg'>
        <Modal.Header closeButton>
          <h1>
            Your Cart
            <Badge bg='danger' className='ms-3'>
              {countAddedItems}
            </Badge>
          </h1>
        </Modal.Header>
        <Modal.Body>
          {addedItems.map(item => (
            <AddedItem key={item.id} item={item} />
          ))}
          <hr />
          <Card.Footer>
            <h3>Total price: {convertToCurrency(totalPrice)}</h3>
            <p>
              See all of your cart items and more actions to do{' '}
              <Link to='/cart'>here</Link>
            </p>
          </Card.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;
