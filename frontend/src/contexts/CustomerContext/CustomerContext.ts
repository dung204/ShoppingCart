import { createContext } from 'react';

const CustomerContext = createContext<Customer>({
  username: '',
  fullname: '',
  email: '',
  phoneNumber: '',
  location: '',
  avatarURL: '',
  addedItems: [],
  updateFullname: fullname => {},
  updateEmail: email => {},
  updatePhoneNumber: phoneNumber => {},
  updateLocation: location => {},
  updateAvatarURL: url => {},
  addItemToCart: item => {},
  removeItemFromCart: item => {},
  incrementAddedItem: item => {},
  decrementAddedItem: item => {},
});

export default CustomerContext;
