import React from "react";
import styled from "styled-components";

type InputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
};

const CustomInput: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <StyledInputContainer isError={!!error}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} className="md:2xl" />
      {error && <span className="error-msg">{error}</span>}
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.div<{ isError: boolean }>`
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${(props) => (props.isError ? "#dc3545" : "none")};
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    background-color: #f9f9f9;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  .error-msg {
    margin-top: 5px;
    color: #dc3545;
    font-size: 14px;
  }
`;

export default CustomInput;
