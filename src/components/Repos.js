import React from 'react';
import styled from 'styled-components';

import {  Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {


  return (
    <section className="section">
      <Wrapper className="section-center fusioncharts-container">
        
          <Pie3D />
          <Bar3D />
          <Column3D />
          <Doughnut2D />
  
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  /* height: 1000px; */
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
