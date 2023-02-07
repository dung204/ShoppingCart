import { Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCustomer } from '@/hooks';

function CustomerDropdown() {
  const { avatarURL } = useCustomer();

  return (
    <Dropdown align='end'>
      <Dropdown.Toggle variant=''>
        <Image
          src={avatarURL}
          alt='Default avatar'
          style={{ width: '50px' }}
          className='rounded-pill'
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.ItemText>
          Sign in as <span className='fw-bold'>User</span>
        </Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} to='/profile'>
          Your profile
        </Dropdown.Item>
        <Dropdown.Item as={Link} to='/sale-list'>
          Your items on sale
        </Dropdown.Item>
        <Dropdown.Item as={Link} to='/cart'>
          Your cart
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomerDropdown;
