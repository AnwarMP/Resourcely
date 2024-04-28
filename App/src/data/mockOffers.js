// src/data/mockOffers.js
const mockOffers = [
    {
      id: 'offer1',
      item: 'Bottled Water',
      detail: 'Spring water in sealed bottles',
      quantity: 100,
      requests: [
        {
          id: 'request1',
          item: 'Bottled Water',
          detail: 'For a family of 4',
          status: 'pending' // This could be 'pending', 'accepted', or 'rejected'
        },
        {
          id: 'request2',
          item: 'Bottled Water',
          detail: 'Urgent need for shelter',
          status: 'pending'
        }
      ]
    },
    {
      id: 'offer2',
      item: 'Canned Food',
      detail: 'Mixed variety pack',
      quantity: 50,
      requests: [
        {
          id: 'request3',
          item: 'Canned Food',
          detail: 'Non-perishables for donation',
          status: 'pending'
        },
        {
          id: 'request4',
          item: 'Canned Food',
          detail: 'Request for local food bank',
          status: 'pending'
        }
      ]
    },
    // ... Add more offers and associated requests as needed for the mockup
  ];
  
  export default mockOffers;
  