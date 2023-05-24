import React from "react";

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Buttons = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-primary-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
