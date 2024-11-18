import { createContext, useEffect, useState } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/3d1d4aab-2d73-4e1c-a198-dd6040515dca');
      const data = await response.json();
      setBookData(data); // Corrected here
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <BookContext.Provider value={bookData}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
