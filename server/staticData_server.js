//shops currently dont have any info about them
// maybe it's better to add a category key,
// save them in a normal array and just query with mongoose?
const shops = {
  groceries: [
    'grocery shop 1',
    'grocery shop 2',
    'grocery shop 3'
  ],
  food: [
    'food shop 1',
    'food shop 2',
    'food shop 3'
  ],
  pharmacies: [
    'pharmacy shop 1',
    'pharmacy shop 2',
    'pharmacy shop 3'
  ],
}

const products = [
  {
    id: '1',
    name: 'name1',
    shopId: '1',
    price: 12
  },
  {
    id: '2',
    name: 'name2',
    shopId: '1',
    price: 12
  },
  {
    id: '3',
    name: 'name3',
    shopId: '2',
    price: 3
  },
  {
    id: '4',
    name: 'name4',
    shopId: '2',
    price: 10
  },
  {
    id: '5',
    name: 'name5',
    shopId: '3',
    price: 1
  },
]

export { shops, products }