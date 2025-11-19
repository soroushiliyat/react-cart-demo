// src/App.tsx
import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import  Cart  from "./components/Cart";


function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", minHeight: "100vh" }}>
      <button onClick={toggleTheme}>Theme Change</button>
      <ProductList />
      <Cart />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
