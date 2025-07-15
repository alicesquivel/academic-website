import React from "react";

/**
 * A responsive container component that centers its content
 * and applies a max-width and consistent padding.
 */
const Container = ({ children }) => {
  return (
    // 'mx-auto' is the key for horizontal centering.
    // 'max-w-4xl' prevents the content from becoming too wide on large screens.
    // 'px-4 sm:px-6 lg:px-8' provides responsive padding for different screen sizes.
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
