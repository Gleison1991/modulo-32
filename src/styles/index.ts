import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  body {
    background-color: #444442;
    padding-top: 85px;
  }

  h1 {
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 72px;
    color: white;
    text-align: center;
  }

  h4 {
    font-family: 'Roboto', sans-serif, 'arial';
    font-weight: 400;
    font-size: 20px;
    color: #9b9b9b;
    line-height: 1.5;
  }

  /* ///// inputs /////*/

  input:focus ~ label,
  textarea:focus ~ label,
  input:valid ~ label,
  textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
  }

  .styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
  }

  @media only screen and (max-width: 768px) {
    .styled-input {
      width: 100%;
    }
  }

  .styled-input label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
  }

  .styled-input.wide {
    width: 650px;
    max-width: 100%;
  }

  input,
  textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
  }

  input:focus,
  textarea:focus {
    outline: 0;
  }

  input:focus ~ span,
  textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
  }

  textarea {
    width: 100%;
    min-height: 15em;
  }

  .input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
  }

  .submit-btn {
    float: right;
    padding: 7px 35px;
    border-radius: 60px;
    display: inline-block;
    background-color: #4b8cfb;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06),
      0 2px 10px 0 rgba(0, 0, 0, 0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  .submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 768px) {
    .submit-btn {
      width: 100%;
      float: none;
      text-align: center;
    }
  }

  input[type='checkbox'] + label {
    color: #ccc;
    font-style: italic;
  }

  input[type='checkbox']:checked + label {
    color: #f00;
    font-style: normal;
  }
`

export default EstiloGlobal

export {}
