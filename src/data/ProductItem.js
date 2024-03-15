// data.js

 let productsData = [
    { id: 1, name: 'Macbook pro', category: 'Laptop', price: '$1500', stockQuantity: 10 },
    { id: 2, name: 'Oppo F21', category: 'Mobile', price: '$200', stockQuantity: 20 },
    { id: 3, name: 'Lenovo Laptop', category: 'Laptop', price: '$600', stockQuantity: 15 },
    { id: 4, name: 'Dell Laptop', category: 'Laptop', price: '$800', stockQuantity: 12 },
  ];
  const getProducts = () => {
    return productsData;
  };
  
  const setProductsData = (newProducts) => {
    productsData = newProducts;
  };
  
  export { productsData,getProducts, setProductsData };