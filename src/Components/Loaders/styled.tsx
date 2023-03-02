import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background};

  @keyframes loader_5191 {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .square {
    background: #ddd;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
  }

  #sq1 {
    margin-top: -25px;
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 0s infinite alternate;
  }

  #sq2 {
    margin-top: -25px;
    animation: loader_5191 675ms ease-in-out 75ms infinite alternate;
  }

  #sq3 {
    margin-top: -25px;
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 150ms infinite;
  }

  #sq4 {
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 225ms infinite;
  }

  #sq5 {
    animation: loader_5191 675ms ease-in-out 300ms infinite;
  }

  #sq6 {
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 375ms infinite;
  }

  #sq7 {
    margin-top: 15px;
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 450ms infinite;
  }

  #sq8 {
    margin-top: 15px;
    animation: loader_5191 675ms ease-in-out 525ms infinite;
  }

  #sq9 {
    margin-top: 15px;
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 600ms infinite;
  }
`;
