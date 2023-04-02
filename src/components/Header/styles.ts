"use client";

import styled from "styled-components";

export const Container = styled.header`
  font-family: var(--roboto-font);
  background: var(--black);
`;

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-family: var(--poppins-font)
    font-size: 1rem;
    color: #fff;
    background: var(--green-light);

    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;
