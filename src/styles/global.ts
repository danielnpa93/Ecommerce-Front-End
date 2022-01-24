import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #f0f2f5;
      --color-button: #ffffffcc;
      --color-button-hover: #ffffff;
      --color-button-disabled: #fff;
      --background-button: #b4980daa;
      --background-button-hover:#b4980dff;
      --background-button-disabled:#b4980d88;
      --border-color: rgba(0, 0, 0, 0.12);
    }

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
      width: 100%;
      /* max-width: 100% */
    }

    html {
      @media (max-width: 1080px){
        font-size: 93.75%;
      }

      @media (max-width: 720px){
        font-size: 87.5%;
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-in;
}

.fade-leave {
  opacity: 1;
}

.fade-leave.fade-leave-active {
  opacity: 0.01;
  transition: opacity 200ms ease-in;
}

.invalid-feedback {
  font-size: 0.7rem;
  color: #dc3545;
}

`;
