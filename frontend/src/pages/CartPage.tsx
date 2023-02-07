import AddedItem from '@/components/AddedItem';
import { useCustomer } from '@/hooks';
import { convertToCurrency } from '@/utils';
import { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartPage() {
  const [showRemoveAll, setShowRemoveAll] = useState(false);
  const { addedItems, removeItemFromCart } = useCustomer();
  const totalPrice = addedItems.reduce(
    (prev, curr) => prev + curr.numberAdded * curr.price,
    0
  );

  const handleShowRemoveAll = () => {
    setShowRemoveAll(true);
  };

  const handleCancelRemoveAll = () => {
    setShowRemoveAll(false);
  };

  const handleConfirmRemoveAll = () => {
    setShowRemoveAll(false);
    addedItems.length = 0;
  };

  useEffect(() => {
    document.title = 'Your Cart';
  }, []);

  return (
    <>
      <Container fluid className='d-flex'>
        <h1 className='me-auto'>Your cart</h1>
        <div>
          <Button
            variant='danger'
            className='me-3'
            onClick={handleShowRemoveAll}
          >
            Remove all
          </Button>
          <Button variant='success'>Purchase</Button>
        </div>
      </Container>
      <hr />
      <Container fluid>
        {addedItems.length === 0 ? (
          <p>
            You haven't added any items. Go to the{' '}
            <Link to='/store'>Store page</Link> to add items to your cart.
          </p>
        ) : (
          <>
            <p>You have added {addedItems.length} item(s)</p>
            <p>
              Total price:{' '}
              <span className='fw-bold'>{convertToCurrency(totalPrice)}</span>
            </p>
            <p>
              Go to the <Link to='/store'>Store page</Link> to add more items.
            </p>
            <hr />
            {addedItems.map(item => (
              <AddedItem key={item.id} item={item} />
            ))}
          </>
        )}
      </Container>

      <Modal show={showRemoveAll} onHide={handleCancelRemoveAll}>
        <Modal.Header closeButton>
          <h1>Remove all</h1>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure to remove all items in your cart?</p>
          <div className='d-flex justify-content-center'>
            <Button
              variant='success'
              className='me-3'
              onClick={handleConfirmRemoveAll}
            >
              Yes
            </Button>
            <Button variant='danger' onClick={handleCancelRemoveAll}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartPage;
