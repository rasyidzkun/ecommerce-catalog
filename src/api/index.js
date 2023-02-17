const getData = async (id) => {
  try {
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const results = await response.json();

    const result = {
      title: results.title,
      price: results.price,
      category: results.category,
      desc: results.description.slice(0, 499),
      image: results.image,
    };

    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getData;
