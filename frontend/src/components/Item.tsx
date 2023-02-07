import { Button, Card } from 'react-bootstrap';
import convertToCurrency from '@/utils/convertToCurrency';
import { useCustomer } from '@/hooks';
import { findAddedItemIndex } from '@/utils';
import ItemCounter from './ItemCounter';

function Item({ item }: ItemProps) {
  const { addedItems, addItemToCart, removeItemFromCart } = useCustomer();
  const addedToCart = findAddedItemIndex(addedItems, item) !== -1;

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeItemFromCart(item);
  };

  return (
    <Card className='bg-white'>
      <Card.Img
        variant='top'
        src={item.thumbnail}
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <span className='fs-3 fw-semibold'>{item.name}</span>
          <span className='mt-2 text-muted'>
            {convertToCurrency(item.price)}
          </span>
        </div>
        {!addedToCart ? (
          <div className='mt-3'>
            <Button variant='success' onClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        ) : (
          <div className='mt-3'>
            <ItemCounter item={item} />
            <Button
              variant='danger'
              className='mt-3'
              onClick={handleRemoveFromCart}
            >
              Remove from cart
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default Item;
