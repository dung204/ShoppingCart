import { useCustomer } from '@/hooks';
import { findAddedItemIndex } from '@/utils';
import { Button } from 'react-bootstrap';

function ItemCounter({ item }: ItemCounterProps) {
  const { addedItems, incrementAddedItem, decrementAddedItem } = useCustomer();
  const numberToBuy =
    addedItems[findAddedItemIndex(addedItems, item)].numberAdded;

  const handleIncrement = () => {
    incrementAddedItem(item);
  };

  const handleDecrement = () => {
    if (numberToBuy === 1) return;

    decrementAddedItem(item);
  };

  return (
    <>
      <Button variant='light' className='me-3' onClick={handleDecrement}>
        -
      </Button>
      {numberToBuy}
      <Button variant='light' className='ms-3' onClick={handleIncrement}>
        +
      </Button>
      <br />
    </>
  );
}

export default ItemCounter;
