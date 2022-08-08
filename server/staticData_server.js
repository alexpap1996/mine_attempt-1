//shops currently dont have any info about them
// maybe it's better to add a category key,
// save them in a normal array and just query with mongoose?
const shops = {
  groceries: [
    {
      name: {
        en: 'Grand Market',
        gr: 'Γκραντ Μάρκετ'
      },
      id: '11',
      category: 'Groceries'
    },
    {
      name: { 
        en: 'Convenience Store',
        gr: 'Παντοπωλείο'
      },
      id: '12',
      category: 'Groceries'
    },
    {
      name: {
        en: 'Super Market',
        gr: 'Σούπερ Μάρκετ'
      },
      id: '13',
      category: 'Groceries',
    },
  ],
  food: [
    {
      name: {
        en: 'Gyro Place',
        gr: 'Γυράδικο'
      },
      id: '21',
      category: 'Food',
      image: {
        url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658337282/gyro_1_afzo80.jpg'
      }
    },
    {
      name: {
        en: 'Crepe Place',
        gr: 'Κρεπάδικο',
      },
      id: '22',
      category: 'Food',
      image: {
        url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658337382/crepe_1_mhz7om.jpg'
      }
    },
    {
      name: {
        en: 'food shop 3',
        gr: 'μαγαζι φαγητου 3'
      },
      id: '23',
      category: 'Food'
    },
  ],
  pharmacies: [
    {
      name: {
        en: 'Pharmacy Main',
        gr: 'Κύριο Φαρμακείο',
      },
      id: '31',
      category: 'Pharmacy',
      image: {
        url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658335845/pharmacy_1_ofngw0.jpg'
      }
    },
    {
      name: {
        en: 'Pharmacy B',
        gr: 'Φαρμακειο Β'
      },
      id: '32',
      category: 'Pharmacy',
      image: {
        url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658336075/phamarcy_2_xpq2ke.jpg'
      }
    },
    {
      name: {
        en: 'Pharmacy C',
        gr: 'Φαρμακειο Γ',
      },
      id: '33',
      category: 'Pharmacy',
      image: {
        url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658336115/pharmacy_3_zzijlp.jpg'
      }
    },
  ],
}

const products = [
  {
    id: '1',
    name: {
      en: 'Orange',
      gr: 'Πορτοκάλι',
    },
    shopId: '11',
    price: 2.55,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg',
      filename: 'kiwi'
    },
    ratings: [
      {
        value: 1.5,
        reviewerId: '1'
      },
      {
        value: 2.5,
        reviewerId: '2'
      },
    ]
  },
  {
    id: '2',
    name: {
      en: 'Orange',
      gr: 'Μεγαλο Πορτοκάλι',
    },
    shopId: '11',
    price: 10.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg',
      filename: 'kiwi'
    },
    ratings: [
      {
        value: 1.5,
        reviewerId: '3'
      }
    ]
  },
  {
    id: '3',
    name: {
      en: 'Kiwi',
      gr: 'Κίουι'
    },
    shopId: '11',
    price: 0.75,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg',
      filename: 'kiwi'
    },
    ratings: [
      {
        value: 3.5,
        reviewerId: '1'
      }
    ]
  },
  {
    id: '4',
    name: {
      en: 'Hawai Kiwi',
      gr: 'Κίουι'
    },
    shopId: '21',
    price: 1.23,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    },
    ratings: [
      {
        value: 4.5,
        reviewerId: '1'
      }
    ],

  },
  {
    id: '5',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '31',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    },
    ratings: [
      {
        value: 4.5,
        reviewerId: '1'
      }
    ]
  },
  {
    id: '6',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '13',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '7',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '13',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '8',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '9',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '10',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '11',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '12',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '13',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
  {
    id: '14',
    name: {
      en: 'Apple',
      gr: 'Μήλο'
    },
    shopId: '12',
    price: 1.00,
    image: {
      url: 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg',
      filename: 'kiwi'
    }
  },
]

const users = [
  {
    id: '1',
    firstname: 'Alex',
    lastname: 'Pap',
    password: 'password',
    username: 'alex@gmail.com',
    emergencyphone: '6912341234',
    orders: [
      {
        id: '1',
        products: [
          { 
            id: '1',
            quantity: 2
          },
          { 
            id: '2',
            quantity: 1
          },
          { 
            id: '3',
            quantity: 2
          },
          { 
            id: '4',
            quantity: 1
          },
          { 
            id: '5',
            quantity: 2
          },
          { 
            id: '6',
            quantity: 1
          },
          { 
            id: '7',
            quantity: 2
          },
          { 
            id: '8',
            quantity: 1
          }
        ],
        date: Date.now(),
        price: '10.15'
      },
      {
        id:'2',
        products: [
        { 
          id: '2',
          quantity: 2
        },
        { 
          id: '3',
          quantity: 1
        }],
        date: Date.now(),
        price: '5.15'
      },
    ]
  }
]

export { shops, products, users }