// src/components/ProductList.tsx
import { useState, useMemo, useCallback } from "react";
import Product from "./Product";


function ProductList() {
  const [cart, setCart] = useState<string[]>([]);

  const products = useMemo(() => ["Laptop", "Mouse", "Keyboard"], []);

  const addToCart = useCallback((item: string) => {
    setCart((prev) => [...prev, item]);
  }, []);

  return (
    <>
      {products.map((p) => (
        <Product key={p} name={p} onAdd={() => addToCart(p)} />
      ))}
      <p>Buy Box: {cart.join(", ")}</p>
    </>
  );
}

export default ProductList;
