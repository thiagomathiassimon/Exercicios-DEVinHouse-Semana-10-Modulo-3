import { createContext, useContext, useEffect, useState } from "react";
import { getAllBooks, getValueOfAllBooks } from "../service/service";

const useBooksList = createContext();

export const useBookList = () => {
  const context = useContext(useBooksList);

  if (!context) {
    throw new Error("useBookList must bu used within an BookListProvider.");
  }
  return context;
};

export const BookListProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [allBooksValue, setAllBooksValue] = useState(0);

  const onChangeBookList = async () => {
    setBooks(await getAllBooks());
    setAllBooksValue(await getValueOfAllBooks());
  };

  useEffect(() => {
    onChangeBookList();
  }, []);

  return (
    <useBooksList.Provider value={{ books, allBooksValue, onChangeBookList }}>
      {children}
    </useBooksList.Provider>
  );
};
