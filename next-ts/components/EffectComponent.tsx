import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  tags: string[];
};

function EffectComponent() {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/1`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      {data ? (
        <section>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Category: {data.category}</p>
          <p>Price: {data.price}</p>
          <p>Rating: {data.rating}</p>
          <p>Tags: {data.tags}</p>
        </section>
      ) : (
        "loading..."
      )}
    </section>
  );
}

export default EffectComponent;
