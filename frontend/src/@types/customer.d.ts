type AddedItem = Item & { numberAdded: number };

type Customer = {
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  location: string;
  avatarURL: string;
  addedItems: AddedItem[];
  updateFullname: (fullname: string) => void;
  updateEmail: (email: string) => void;
  updatePhoneNumber: (phoneNumber: string) => void;
  updateLocation: (location: string) => void;
  updateAvatarURL: (url: string) => void;
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (item: Item | AddedItem) => void;
  incrementAddedItem: (item: Item) => void;
  decrementAddedItem: (item: Item) => void;
};
