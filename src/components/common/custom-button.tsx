import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  text: string;
  type?: "primary" | "secondary" | "danger";
  icon?: React.ReactNode;
  imageSrc?: string;
  isReversed?: boolean;
  width?: string;
  centerTextOnly?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  type,
  icon,
  imageSrc,
  width,
  isReversed = false,
  centerTextOnly = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      buttonType={type}
      isReversed={isReversed}
      width={width}
      centerTextOnly={centerTextOnly}
    >
      {imageSrc && !icon && (
        <img src={imageSrc} alt="" className="image-container" />
      )}
      <span className="text-container">{text}</span>
      {icon && <span className="icon-container">{icon}</span>}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  buttonType?: string;
  isReversed: boolean;
  width?: string;
  centerTextOnly?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.centerTextOnly ? "center" : "start")};
  flex-direction: ${(props) => (props.isReversed ? "row-reverse" : "row")};
  gap: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  width: ${(props) => props.width || "fit-content"};
  position: relative;

  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.buttonType === "primary" &&
    css`
      background-color: #8686c3;
      color: white;

      &:hover {
        /* background-color: #5c5c8a; */
        opacity: 0.9;
      }
    `}

  ${(props) =>
    props.buttonType === "secondary" &&
    css`
      background-color: #f9f9f9;
      color: black;

      &:hover {
        /* background-color: #e0e0e0; */
      }
    `}

  ${(props) =>
    props.buttonType === "danger" &&
    css`
      background-color: #dc3545;
      color: white;

      &:hover {
        background-color: #c82333;
      }
    `}

  ${(props) =>
    !props.buttonType &&
    css`
      background-color: white;
      color: black;

      &:hover {
        background-color: #f0f0f0;
      }
    `}
  
  .icon-container {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  .image-container {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    position: ${(props) => (props.centerTextOnly ? "absolute" : "relative")};
    left: ${(props) =>
      !props.isReversed && props.centerTextOnly ? "20px" : "none"};
    right: ${(props) =>
      props.isReversed && props.centerTextOnly ? "20px" : "none"};
  }
`;

export default CustomButton;
