import * as React from "react";
import * as classnames from "classnames";

import "./Button.css";

export interface ButtonProps {
  /**
   * The color for the button
   */
  color?: "primary" | "secondary";
  /**
   * The size of the button
   */
  size?: "small" | "normal" | "large";
  /**
   * Set true to make the button disable
   */
  disable?: boolean;
  /**
   * Gets called when the user clicks on the button
   */
  onClick?: () => void;
  /**
   * Button label
   */
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = props => {
  const { color, size, disable, onClick, children } = props;
  const rootStyle = classnames("example-button", {
    [`is-${size}`]: Boolean(size),
    [`is-${color}`]: Boolean(color)
  });
  return (
    <button className={rootStyle} disabled={disable} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
  disable: false
};
