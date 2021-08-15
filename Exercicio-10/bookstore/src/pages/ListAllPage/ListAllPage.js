import { Grid } from "@material-ui/core";
import { useBookList } from "../../context/booksContext";
import { CardContainer } from "../../components/CardContainer";
import { NavBar } from "../../components/NavBar";
import { TotalPriceOfAllBooks } from "../../components/TotalPriceOfAllBooks";

export const ListAllPage = () => {
  const { books, allBooksValue } = useBookList();
  return (
    <>
      <NavBar />
      {console.log("books", books)}
      <Grid container justifyContent="center" alignItems="center">
        {books?.map((book, index) => (
          <CardContainer key={index} book={book} />
        ))}
      </Grid>
      <TotalPriceOfAllBooks totalPrice={allBooksValue} />
    </>
  );
};
