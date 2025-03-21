const getProductData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProductData;
