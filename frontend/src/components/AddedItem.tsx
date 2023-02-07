import { Card, Row, Col, Button } from 'react-bootstrap';
import { convertToCurrency } from '@/utils';
import { useCustomer } from '@/hooks';
import ItemCounter from './ItemCounter';

function AddedItem({ item }: AddedItemProps) {
  const { removeItemFromCart } = useCustomer();

  return (
    <Card key={item.id} className='mb-3' style={{ width: '100%' }}>
      <Row className='no-gutter'>
        <Col xs={5}>
          <Card.Img
            src={item.thumbnail}
            alt='thumbnail'
            style={{ objectFit: 'cover', height: '200px' }}
          />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <Card.Title>
              <h3>{item.name}</h3>
            </Card.Title>
            <Card.Text>
              {item.numberAdded} x {convertToCurrency(item.price)} ={' '}
              {convertToCurrency(item.numberAdded * item.price)}
            </Card.Text>
            <ItemCounter item={item} />
          </Card.Body>
        </Col>
        <Col
          xs={1}
          className='d-flex align-items-center justify-content-center'
        >
          <Button
            variant='close'
            title='Remove item'
            onClick={() => removeItemFromCart(item)}
          ></Button>
        </Col>
      </Row>
    </Card>
  );
}

export default AddedItem;
