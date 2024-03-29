import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h1>404</h1>
          <h3>Page was not found</h3>
          <Link className="btn" to="/">
            Back to Homepage
          </Link>
        </section>
      </Wrapper>
    </>
  )
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
  a {
    text-transform: uppercase;
  }
`;
export default Error;
