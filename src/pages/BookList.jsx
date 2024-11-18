import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 0.9em;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 8px;
  font-size: 0.9em;
  background-color: #000000;
  color: white;
  border: 2px white solid;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const BookList = () => {
  const bookData = useContext(BookContext); // Fixing destructuring issue

  return (
    <Container>
      <SearchContainer>
        <SearchInput type="text" placeholder="Enter to Search" />
        <SearchButton>Search</SearchButton>
      </SearchContainer>

      <CardList>
        {bookData.map((book) => (
          <BookCard key={book.id}
            image={book.image}
            title={book.name}
            author={book.author}
            rating={book.rating}
            genre={book.genre}
          />
        ))}
      </CardList>
    </Container>
  );
};

export default BookList;
