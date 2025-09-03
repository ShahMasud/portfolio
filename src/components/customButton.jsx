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
    border-bottom: 2px solid #6366f1;
      background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:active {
    transform: scale(0.98);
  }

  /* ✅ Apply active styles conditionally */
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #6366f1;
            background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
