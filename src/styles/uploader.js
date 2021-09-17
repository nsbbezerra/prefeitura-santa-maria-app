import styled from "@emotion/styled";

export const InputFile = styled.label`
  width: ${(props) => props.lar || 0}px;
  height: ${(props) => props.alt || 0}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 3px;
  font-size: 15px;
  border: 1px dashed ${(props) => props.border};
  text-align: center;
  transition: all 0.3s;
  &:hover {
    border: 2px dashed ${(props) => props.border};
  }
`;

export const File = styled.input`
  display: none;
`;
