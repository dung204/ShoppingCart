function findAddedItemIndex(addedItems: AddedItem[], item: Item) {
  return addedItems.map(({ id }) => id).indexOf(item.id);
}

export default findAddedItemIndex;
