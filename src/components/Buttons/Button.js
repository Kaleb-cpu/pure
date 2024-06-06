import React from "react";
import PropTypes from "prop-types";

export default function Button({
  children,
  onClick,
  className,
  type,
  ...props
}) {
  return (
    <button class="relative group text-left mt-2 py-1.5 px-2.5 text-teritary">
      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teritary group-hover:w-full group-hover:transition-all"></span>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
Button.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
};
