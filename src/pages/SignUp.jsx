import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 28rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  color: #4b5563;
`;

const Input = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  outline: none;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
  color: #6366f1;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
`;

const Button = styled.button`
  width: 100%;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  outline: none;
  &:hover {
    background-color: #4338ca;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
  }
`;

const Text = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Link = styled.a`
  color: #4f46e5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Signup = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Create an account</Title>
        <Form>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="john_doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Your email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <CheckboxWrapper>
            <Checkbox
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              required
            />
            <CheckboxLabel htmlFor="termsAccepted">
              I accept the <Link href="#">Terms and Conditions</Link>
            </CheckboxLabel>
          </CheckboxWrapper>

          <Button type="submit">Create an account</Button>
        </Form>

        <Text>
          Already have an account? <Link href="/login">Login here</Link>
        </Text>
      </FormWrapper>
    </Container>
  );
};

export default Signup;
