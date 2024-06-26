import React from "react";
import PropTypes from "prop-types";

export default function SubmitButton({
  children,
  isSubmitting,
  isLogin,
  onClick,
  className,
  type,
  ...props
}) {
  
  return (
    <button
      disabled={isSubmitting}
      className={`relative inline-flex w-full items-center justify-center p-0.5 overflow-hidden text-md font-button rounded-lg group bg-gradient-to-br from-secondary to-fourth group-hover:from-fourth group-hover:to-secondary hover:text-white dark:text-white focus:ring-4 focus:outline-none border-2 ${
        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      type={type}
      {...props}
    >
      <span className="relative py-2 transition-all w-full ease-in duration-75 bg-white dark:bg-primary rounded-md group-hover:bg-opacity-0 transform motion-safe:hover:scale-110">
      {isSubmitting && isLogin ? 'Logging in...' : children}
      </span>
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

SubmitButton.defaultProps = {
  onClick: () => {},
  className: "",
  isSubmitting: false,
  type: "button",
};
