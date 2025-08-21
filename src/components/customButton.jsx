import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid gray;
  padding: 12px 0px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid #d72020ff;
    color: #d72020ff;
  }

  &:active {
    transform: scale(0.98);
  }

  /* ✅ Apply active styles conditionally */
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #d72020ff;
      color: #d72020ff;
    `}
`;

const CustomButton = ({ children, active, onClick }) => {
  return (
    <Button active={active} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
