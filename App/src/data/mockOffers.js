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
          status: 'pending'
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
    {
      id: 'offer3',
      item: 'First Aid Kits',
      detail: 'Basic medical supplies',
      quantity: 20,
      requests: [
        {
          id: 'request5',
          item: 'First Aid Kits',
          detail: 'For a community center',
          status: 'pending'
        },
        {
          id: 'request6',
          item: 'First Aid Kits',
          detail: 'Urgent need for medical supplies',
          status: 'pending'
        }
      ]
    },
    {
      id: 'offer4',
      item: 'Blankets',
      detail: 'Warmth and comfort',
      quantity: 80,
      requests: [
        {
          id: 'request7',
          item: 'Blankets',
          detail: 'For a shelter',
          status: 'pending'
        },
        {
          id: 'request8',
          item: 'Blankets',
          detail: 'Request for warmth',
          status: 'pending'
        }
      ]
    },
    {
      id: 'offer5',
      item: 'Flashlights',
      detail: 'Light sources',
      quantity: 30,
      requests: [
        {
          id: 'request9',
          item: 'Flashlights',
          detail: 'For a search and rescue team',
          status: 'pending'
        },
        {
          id: 'request10',
          item: 'Flashlights',
          detail: 'Request for lighting',
          status: 'pending'
        }
      ]
    },
    {
      id: 'offer6',
      item: 'Battery-Powered Radios',
      detail: 'Stay informed',
      quantity: 40,
      requests: [
        {
          id: 'request11',
          item: 'Battery-Powered Radios',
          detail: 'For a community center',
          status: 'pending'
        },
        {
          id: 'request12',
          item: 'Battery-Powered Radios',
          detail: 'Request for news updates',
          status: 'pending'
        }
      ]
    },
    {
      id: 'offer7',
      item: 'Personal Hygiene Kits',
      detail: 'Toiletries and essentials',
      quantity: 60,
      requests: [
        {
          id: 'request13',
          item: 'Personal Hygiene Kits',
          detail: 'For a shelter',
          status: 'pending'
        },
        {
          id: 'request14',
          item: 'Personal Hygiene Kits',
          detail: 'Request for personal care items',
          status: 'pending'
        }
      ]
    }
  ];
  
  export default mockOffers;