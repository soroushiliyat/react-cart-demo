// src/components/Cart.tsx
import { useRef } from "react";

function Cart() {
  const cartRef = useRef<HTMLDivElement>(null);

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scrollToCart}>Go with scroll & useRef </button>
      <div ref={cartRef} style={{ marginTop: "100vh" }}>
        <h2>Buy Box</h2>
        {/* محتوای سبد */}
      </div>
    </>
  );
}

export default Cart;
