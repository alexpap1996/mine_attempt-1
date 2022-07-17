//shops currently dont have any info about them
// maybe it's better to add a category key,
// save them in a normal array and just query with mongoose?
const shops = {
  groceries: [
    {
      name: 'grocery shop 2',
      id: '11'
    },
    {
      name: 'grocery shop 2',
      id: '12'
    },
    {
      name: 'grocery shop 2',
      id: '13'
    },
  ],
  food: [
    {
      name: 'food shop 1',
      id: '21'
    },
    {
      name: 'food shop 2',
      id: '22'
    },
    {
      name: 'food shop 3',
      id: '23'
    },
  ],
  pharmacies: [
    {
      name: 'pharmacy 1',
      id: '31'
    },
    {
      name: 'pharmacy 2',
      id: '32'
    },
    {
      name: 'pharmacy 2',
      id: '33'
    },
  ],
}

const products = [
  {
    id: '1',
    name: 'Orange',
    shopId: '11',
    price: 2.55,
    photoDir: 'orange.jpg'
  },
  {
    id: '2',
    name: 'Big Orange',
    shopId: '11',
    price: 10.00,
    photoDir: 'orange.jpg'
  },
  {
    id: '3',
    name: 'Kiwi',
    shopId: '11',
    price: 0.75,
    photoDir: 'orange.jpg'
  },
  {
    id: '4',
    name: 'Hawai Kiwi',
    shopId: '21',
    price: 1.23,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '5',
    name: 'Apple',
    shopId: '31',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '6',
    name: 'Apple',
    shopId: '13',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '7',
    name: 'Apple',
    shopId: '13',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '8',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '9',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '10',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '11',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '12',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '13',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
  {
    id: '14',
    name: 'Apple',
    shopId: '12',
    price: 1.00,
    photoDir: 'kiwi.jpg'
  },
]

export { shops, products }