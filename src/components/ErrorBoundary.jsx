import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };
  console.log("hello error boundary")
  return (
    <div>
      {hasError ? (
        <div>City not available. Please try again.</div>
      ) : (
        React.cloneElement(children, { onError: handleError })
      )}
    </div>
  );
};

export default ErrorBoundary;
