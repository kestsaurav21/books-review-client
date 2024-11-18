import React from 'react';
import { FaStar } from 'react-icons/fa6';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 0.8rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  margin: 2rem;
  transition: transform 0.7s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const BookInfo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const BookTitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #333;
`;

const BookAuthor = styled.p`
  font-size: 0.9em;
  margin: 0;
  color: #777;
`;

const BookRating = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  margin: 0;
  color: #555;
`;

const BookGenre = styled.p`
  font-size: 0.9em;
  margin: 0;
  color: #555;
`;

const ReviewButton = styled.button`
  margin-top: 10px;
  padding: 8px;
  font-size: 0.9em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

// BookCard Component
const BookCard = ({ image, title, author, rating, genre }) => {
  return (
    <>
    <CardContainer>
      <BookImage src={image} alt='book-cover' />
      <BookInfo>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookRating><FaStar/> {rating} / 5</BookRating>
        <BookGenre>{genre}</BookGenre>
        <ReviewButton>
          Add Review
        </ReviewButton>
        <ReviewButton >
          Check Review
        </ReviewButton>
      </BookInfo>
    </CardContainer>

    <CardContainer>
      <BookImage src='https://covers.openlibrary.org/b/id/6979861-L.jpg' alt='book-cover' />
      <BookInfo>
        <BookTitle>The Hobbit</BookTitle>
        <BookAuthor>J.R.R. Tolkien</BookAuthor>
        <BookRating><FaStar/> 4 / 5</BookRating>
        <BookGenre>Genre</BookGenre>
        <ReviewButton>
          Add Review
        </ReviewButton>
        <ReviewButton >
          Check Review
        </ReviewButton>
      </BookInfo>
    </CardContainer>

  
    </>
    
  );
};

export default BookCard;
