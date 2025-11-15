// src/components/Product.tsx
import { memo } from "react";

type Props = {
  name: string;
  onAdd: () => void;
};

const Product = memo(({ name, onAdd }: Props) => {
  console.log(`${name} رندر شد`);
  return <button onClick={onAdd}>افزودن {name}</button>;
});


export default Product;