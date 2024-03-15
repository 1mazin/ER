 let orders = [
  { id: 1, productName: 'Laptop', completed: false, date: '2024-03-15', customer: 'John Doe', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, productName: 'Mobile Phone', completed: false, date: '2024-03-14', customer: 'Jane Smith', details: 'Nulla euismod ultrices enim.' },
  { id: 3, productName: 'Smartwatch', completed: false, date: '2024-03-13', customer: 'Bob Johnson', details: 'Praesent lacinia tortor eget mauris varius.' },
  { id: 4, productName: 'Desktop Computer', completed: false, date: '2024-03-12', customer: 'Alice Johnson', details: 'Vestibulum nec magna in magna gravida consectetur.' },
  { id: 5, productName: 'Tablet', completed: false, date: '2024-03-11', customer: 'Charlie Brown', details: 'Donec malesuada magna ut quam.' },
  { id: 6, productName: 'Headphones', completed: false, date: '2024-03-10', customer: 'David Smith', details: 'Morbi sollicitudin sapien eget tortor aliquam lacinia.' },
];

  const getOrders = () => {
    return orders;
  };
  
  const setOrders = (newOrders) => {
    orders = newOrders;
  };
  
  export { orders,getOrders, setOrders };
  