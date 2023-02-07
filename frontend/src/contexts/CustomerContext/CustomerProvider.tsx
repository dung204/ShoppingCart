import { findAddedItemIndex } from '@/utils';
import { ReactNode, useState } from 'react';
import CustomerContext from './CustomerContext';

const DEFAULT_AVATAR = '/default-avatar.jpg';

function CustomerProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [avatarURL, setAvatarURL] = useState(DEFAULT_AVATAR);
  const [addedItems, setAddedItems] = useState<AddedItem[]>([]);

  const updateFullname = (fullname: string) => {
    setFullname(fullname);
  };

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const updatePhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
  };

  const updateLocation = (location: string) => {
    setLocation(location);
  };

  const updateAvatarURL = (url: string) => {
    setAvatarURL(url);
  };

  const addItemToCart = (item: Item) => {
    setAddedItems([...addedItems, { ...item, numberAdded: 1 }]);
  };

  const removeItemFromCart = (item: Item | AddedItem) => {
    setAddedItems(addedItems.filter(addedItem => addedItem.id !== item.id));
  };

  const incrementAddedItem = (item: Item) => {
    const index = findAddedItemIndex(addedItems, item);
    if (index === -1) return;

    const copyAddedItems = [...addedItems];
    ++copyAddedItems[index].numberAdded;
    setAddedItems(copyAddedItems);
  };

  const decrementAddedItem = (item: Item) => {
    const index = findAddedItemIndex(addedItems, item);
    if (index === -1) return;

    const copyAddedItems = [...addedItems];
    --copyAddedItems[index].numberAdded;
    setAddedItems(copyAddedItems);
  };

  const value: Customer = {
    username,
    fullname,
    email,
    phoneNumber,
    location,
    avatarURL,
    addedItems,
    updateFullname,
    updateEmail,
    updatePhoneNumber,
    updateLocation,
    updateAvatarURL,
    addItemToCart,
    removeItemFromCart,
    incrementAddedItem,
    decrementAddedItem,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
