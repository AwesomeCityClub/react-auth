export async function getProducts() {
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    console.log(data);
    return data;
  }
  