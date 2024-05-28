import React from 'react';
import PropTypes from 'prop-types';

export default function RegularButton({children, onClick, className, type, ...props}) {
  return (
    <button class="relative inline-flex w-full items-center justify-center p-0.5 mb-2 overflow-hidden text-md font-button rounded-full group bg-gradient-to-br from-secondary to-fourth group-hover:from-fourth group-hover:to-secondary hover:text-white dark:text-white focus:ring-4 focus:outline-none">
<span class="relative px-5 transition-all w-full ease-in duration-75 rounded-md transform motion-safe:hover:scale-110">
{children}
</span>
</button>
  )
}


RegularButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

RegularButton.defaultProps = {
  onClick: () => {},
  className: '',
  type: 'button',
};