import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";
import { NewFlexProps } from "./types";

const NewFlex = styled(Box)<NewFlexProps>`
  display: flex;
  ${flexbox}
`;

export default NewFlex;
