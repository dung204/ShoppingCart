import InputField from '@/components/InputField';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function SellProductPage() {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [numberInStock, setNumberInStock] = useState(0);

  useEffect(() => {
    document.title = 'Sell Product';
  }, []);

  return (
    <Container fluid>
      <Card className='p-2'>
        <Card.Header>
          <Card.Title>
            <h1>Sell Product</h1>
          </Card.Title>
          <Card.Text>
            Got any product to sale? Fill in the form the post the product for
            others to buy.
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <Form>
            <Container>
              <Row>
                <Col xs={10}>
                  <InputField
                    label='Product name:'
                    value=''
                    onInputChange={() => {}}
                  />
                  <InputField
                    label='Product type:'
                    value=''
                    onInputChange={() => {}}
                  />
                  {/* <InputField
                    label='Full name:'
                    value={tempFullname}
                    onInputChange={handleChangeTempFullname}
                  />
                  <InputField
                    inputType='email'
                    label='Email:'
                    value={tempEmail}
                    onInputChange={handleChangeTempEmail}
                  />
                  <InputField
                    label='Phone number:'
                    value={tempPhoneNumber}
                    onInputChange={handleChangeTempPhoneNumber}
                  />
                  <InputField
                    label='Location:'
                    value={tempLocation}
                    onInputChange={handleChangeTempLocation}
                  /> */}
                  <Row className='mb-5'>
                    <Col xs={4}></Col>
                    <Col xs={6}>
                      <Button
                        variant='success'
                        // onClick={handleSave}
                      >
                        Post
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SellProductPage;
