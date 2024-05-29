import React from "react";
import PropTypes from "prop-types";

export default function SubmitButton({
  children,
  onClick,
  className,
  type,
  ...props
}) {
  return (
    <button class="relative inline-flex w-1/2 items-center justify-center p-0.5 overflow-hidden text-md font-button rounded-lg group bg-gradient-to-br from-secondary to-fourth group-hover:from-fourth group-hover:to-secondary hover:text-white dark:text-white focus:ring-4 focus:outline-none">
      <span class="relative py-2 transition-all w-full ease-in duration-75 bg-white dark:bg-primary rounded-md group-hover:bg-opacity-0 transform motion-safe:hover:scale-110">
        {children}
      </span>
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

SubmitButton.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
};
