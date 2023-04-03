"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: var(--roboto-font);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
  }

  html, body, #root {
    -webkit-font-smoothing: antialiased;
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    
  }

  html {
    font-family: var(--roboto-font);
    @media (min-width: 1080px) {
      font-size: 93.75%
    }
    @media (min-width: 720px) {
      font-size: 87.5%
    }
  }
  :root {
    --background: #202024;
    --black: #121214;
    --gray: #323238;
    --blue-light: #6933F;
    --green: #015F43;
    --green-light: #00875F;
    --green-deposit: #00B37E;
    --red: #F75A68;
    --shape: #29292E;

    --text-body: #C4C4CC;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
		width: 100%;
		max-width: 535px;
		background: var(--background);
		padding: 3rem;
		position: relative;
		border-radius: 0.25rem;

  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2;

    &:hover {
       filter: brightness(0.9);
    }
  }

  input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
`;
