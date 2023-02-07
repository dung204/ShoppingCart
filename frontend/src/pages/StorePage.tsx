import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Item from '@/components/Item';

function StorePage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    document.title = 'Store';

    (async () => {
      const res = await fetch('/data/items.json');
      const items = await res.json();
      setItems(items);
    })();
  }, []);

  return (
    <Row xs={1} md={2} lg={3} xl={4} className='g-3'>
      {items.map(item => (
        <Col key={item.id}>
          <Item key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  );
}

export default StorePage;
