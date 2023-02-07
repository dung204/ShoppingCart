import InputField from '@/components/InputField';
import { useCustomer } from '@/hooks';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Image,
} from 'react-bootstrap';

const MAX_IMAGE_SIZE = 1048576; // = 1MB, counted in bytes

function ProfilePage() {
  const {
    username,
    fullname,
    email,
    phoneNumber,
    location,
    avatarURL,
    updateFullname,
    updateEmail,
    updatePhoneNumber,
    updateLocation,
    updateAvatarURL,
  } = useCustomer();
  const [tempFullname, setTempFullName] = useState(fullname);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempAvatarURL, setTempAvatarURL] = useState(avatarURL);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleChangeTempFullname = (e: any) => {
    setTempFullName(e.target.value);
  };

  const handleChangeTempEmail = (e: any) => {
    setTempEmail(e.target.value);
  };

  const handleChangeTempPhoneNumber = (e: any) => {
    setTempPhoneNumber(e.target.value);
  };

  const handleChangeTempLocation = (e: any) => {
    setTempLocation(e.target.value);
  };

  const handleSave = () => {
    updateFullname(tempFullname);
    updateEmail(tempEmail);
    updatePhoneNumber(tempPhoneNumber);
    updateLocation(tempLocation);
    updateAvatarURL(tempAvatarURL);
  };

  const handleTriggerInput = () => {
    imageInputRef?.current?.click();
  };

  const handleChangeImageInput: ChangeEventHandler<HTMLInputElement> = e => {
    const image = e.target.files?.[0];
    if (!image || image.size > MAX_IMAGE_SIZE) return;

    setTempAvatarURL(URL.createObjectURL(image));
  };

  useEffect(() => {
    document.title = 'Your Profile';

    return () => {
      tempAvatarURL === avatarURL || URL.revokeObjectURL(tempAvatarURL);
    };
  }, [tempAvatarURL]);

  return (
    <Container fluid>
      <Card className='p-2'>
        <Card.Header>
          <Card.Title>
            <h1>Your Profile</h1>
          </Card.Title>
          <Card.Text>Managing your profile to increase security</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form>
            <Container>
              <Row>
                <Col xs={10}>
                  <Row className='mb-5'>
                    <Col xs={4} className='text-muted text-end'>
                      <span className='align-middle'>Username:</span>
                    </Col>
                    <Col xs={6}>
                      <span className='align-middle'>{username}</span>
                    </Col>
                  </Row>
                  <InputField
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
                  />
                  <Row className='mb-5'>
                    <Col xs={4}></Col>
                    <Col xs={6}>
                      <Button variant='success' onClick={handleSave}>
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} className='d-flex flex-column align-items-center'>
                  <Image
                    className='rounded-pill'
                    src={tempAvatarURL}
                    alt='Default avatar'
                    style={{
                      width: '12vw',
                      height: '12vw',
                      border: '1px solid',
                    }}
                  />
                  <Button
                    className='mt-4'
                    variant='outline-dark'
                    onClick={handleTriggerInput}
                  >
                    Choose avatar
                  </Button>
                  <input
                    ref={imageInputRef}
                    type='file'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={handleChangeImageInput}
                  />
                  <div className='text-muted mt-4'>
                    Maximum image size: 1 MB
                  </div>
                  <div className='text-muted'>Accept all image formats</div>
                </Col>
              </Row>
            </Container>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfilePage;
