import styled from "styled-components";

export const CustomP = styled.p`
  margin-top: 25px;
  font-size: 1.5em;
  text-align: center;
`;

export const CustomClassP = styled.p.attrs({
  className: "mt-[25px] text-[1.5em] text-center",
})``;
