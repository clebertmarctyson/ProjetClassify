import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useStore } from "./store/store";

const App = () => {
  const { categories, setCategories } = useStore();

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="w-screen h-screen p-4">
        {JSON.stringify(categories)}
      </main>
    </div>
  );
};

export default App;
