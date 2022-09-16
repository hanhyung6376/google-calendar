import styled from 'styled-components';

const Input = styled.input`
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[5]};
    border-radius: 5px;
    padding-bottom: 0.5rem;
    width: 50%;
    &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

export default Input;
