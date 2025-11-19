// src/components/Product.tsx
import { memo } from "react";

type Props = {
  name: string;
  onAdd: () => void;
};

const Product = memo(({ name, onAdd }: Props) => {
  console.log(`${name} Render`);
  return <button onClick={onAdd}> + {name}</button>;
});


export default Product;
