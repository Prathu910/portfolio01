import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);
  return (
    <div className="loaded-div">
      {!isPageLoaded && (
        <div id="preloader" className={`${isLoaded ? "preloaded" : ""}`}>
          <div class="loader_line"></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
