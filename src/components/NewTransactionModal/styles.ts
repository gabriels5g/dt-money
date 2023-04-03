import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: #e1e1e6;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #e1e1e6;
    width: 100%;
    padding: 0, 1.5rem;
    height: 3.3rem;
    outline: none;
    padding: 1rem;

    border-radius: 0.375rem;
    border: 1px solid var(--black);
    background: var(--black);
  }

  button[type="submit"] {
    margin-top: 8px;
    color: white;
    width: 100%;
    height: 3.6rem;
    padding: 0, 1.5rem;
    background: #00875f;
    border-radius: 0.375rem;
    border: 1px solid #00875f;
    transition: filter 0.2s;
    font-size: 16px;
    font-weight: bold;
    line-height: 160%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    color: #c4c4cc;
    height: 4rem;
    border: 1px solid #29292e;
    border-radius: 0.375rem;

    background: #29292e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
