type Item = {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
};

type ItemProps = {
  item: Item;
};

type AddedItemProps = {
  item: AddedItem;
};

type ItemCounterProps = ItemProps | AddedItemProps;
