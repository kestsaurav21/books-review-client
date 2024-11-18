import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';
import styled from 'styled-components';

// Styled Components for the layout
const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

const Home = () => {
  const bookData = useContext(BookContext);

  // Filter the books based on 'Trending' and 'Featured'
  const trendingBooks = bookData.filter((book) => book.isTrending);
  const featuredBooks = bookData.filter((book) => book.isFeatured);

  return (
    <Container>
      {/* Trending Books Section */}
      <Section>
        <SectionTitle>Trending Books</SectionTitle>
        <CardList>
          {trendingBooks.length ? (
            trendingBooks.map((book, idx) => (
              <BookCard
                key={idx}
                image={book.image}
                title={book.name}
                author={book.author}
                rating={book.rating}
                genre={book.genre}
              />
            ))
          ) : (
            <p>No trending books available.</p>
          )}
        </CardList>
      </Section>

      {/* Featured Books Section */}
      <Section>
        <SectionTitle>Featured Books</SectionTitle>
        <CardList>
          {featuredBooks.length ? (
            featuredBooks.map((book, idx) => (
              <BookCard
                key={idx}
                image={book.image}
                title={book.name}
                author={book.author}
                rating={book.rating}
                genre={book.genre}
              />
            ))
          ) : (
            <p>No featured books available.</p>
          )}
        </CardList>
      </Section>
    </Container>
  );
};

export default Home;
