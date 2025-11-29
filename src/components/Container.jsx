import React from "react";

/**
 * A responsive container component that centers its content
 * and applies a max-width and consistent padding.
 */
const Container = ({ children }) => {
  return (
    // Adjusted padding for better mobile experience and smoother transitions
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
