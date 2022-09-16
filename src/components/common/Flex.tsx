import styled, { css } from 'styled-components';
import { FlexProps } from 'types/components';

const Flex = styled.div<FlexProps>`
  ${(props) =>
      props.container &&
      css`
          display: flex;
          width: 100%;
      `}
  ${(props) =>
      props.item &&
      css`
          flex: auto;
      `}

  ${(props) =>
      props.flexDirection &&
      css`
          flex-direction: ${props.flexDirection};
      `}
  ${(props) =>
      props.alignItems &&
      css`
          align-items: ${props.alignItems};
      `}
    ${(props) =>
        props.justifyContent &&
        css`
            justify-content: ${props.justifyContent};
        `}
  ${(props) =>
      props.spacing &&
      css`
          gap: ${props.spacing};
      `}
  ${(props) =>
      props.lg &&
      css`
      @media ${({ theme }) => theme.device.small} {
      display: none
  `}}
${(props) =>
    props.sm &&
    css`
      @media ${({ theme }) => theme.device.large} {
      display: none
  `}}
`;

export default Flex;
