"use client";

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    margin-top: 1.5rem;
    width: 1120px;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2 rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green-deposit);
      }
    }
  }
`;

export const Contente = styled.div`
  width: 1120px;
  gap: 16px;
  display: flex;

  input {
    color: #c4c4cc;
    outline: 0;
    padding: 16px;
    width: 100%;
    background: #121214;
    border-radius: 6px;
    border: none;
  }

  button {
    border: 1px solid #00b37e;
    color: #00b37e;

    padding: 14px 32px;
    background: transparent;
    border-radius: 6px;
    font-family: var(--roboto-font);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: filter 0.2s;
  }
`;
