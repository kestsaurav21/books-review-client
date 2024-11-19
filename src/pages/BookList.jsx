import React, { useContext, useState, useEffect } from "react";
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

const SearchContainer = styled.form`
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
  margin-right: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const ResetButton = styled.button`
  padding: 8px;
  font-size: 0.9em;
  background-color: #e74c3c;
  color: white;
  border: 2px white solid;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

const BookList = () => {
  const bookData = useContext(BookContext);

  const [filterData, setFilterData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setFilterData(bookData);
  }, [bookData]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKey.length > 0) {
      const searchBookData = bookData.filter((book) =>
        book.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        book.author.toLowerCase().includes(searchKey.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchKey.toLowerCase())
      );

      setFilterData(searchBookData.length > 0 ? searchBookData : []);
    }
  };

  const handleReset = () => {
    setSearchKey("");
    setFilterData(bookData);
  };

  return (
    <Container>
      <SearchContainer onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Enter to Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          aria-label="Search Books"
        />
        <SearchButton type="submit">Search</SearchButton>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </SearchContainer>

      <CardList>
        {filterData.length > 0 ? (
          filterData.map((book) => (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.name}
              author={book.author}
              rating={book.rating}
              genre={book.genre}
            />
          ))
        ) : (
          <p>No records found!</p>
        )}
      </CardList>
    </Container>
  );
};

export default BookList;
