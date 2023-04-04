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
    color: #7c7c8a;
    width: 100%;

    height: 3.5rem;
    padding: 1rem;
    outline: none;
    border-radius: 0.375rem;
    border: 1px solid var(--black);
    background: #121214;

    &:focus {
      outline: solid 1px #00b37e;
    }
  }

  button[type="submit"] {
    margin-top: 1rem;
    color: white;
    width: 100%;
    height: 3.6rem;
    padding: 0, 1.5rem;
    background: #00875f;
    border-radius: 0.375rem;
    border: 1px solid #00875f;
    transition: filter 0.2s;
    font-size: 1rem;
    font-weight: bold;
    line-height: 160%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBoxDeposit = styled.button<RadioBoxProps>`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#C4C4CC")};
  height: 4rem;
  border: 1px solid #29292e;
  border-radius: 0.375rem;

  background: ${(props) => (props.isActive ? "#015F43" : "#29292E")};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

export const RadioBoxWithdraw = styled.button<RadioBoxProps>`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#C4C4CC")};
  height: 4rem;
  border: 1px solid #29292e;
  border-radius: 0.375rem;

  background: ${(props) => (props.isActive ? "#AA2834" : "#29292E")};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;
