import styled from "styled-components";

//Button CSS
export const Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: red;
    color: yellow;
    font-weight: bold;
  }
`;

//Alert CSS
export const Alert = styled.div`
  background-color: ${(props) => (props.success ? "green" : "red")};
  color: white;
  width: 80%;
  height: 30px;
  border-radius: 5px;
`;

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  font-family: ${props => props.theme.fonts.body};
`;

export const SecondaryButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  font-family: ${props => props.theme.fonts.heading};
`;