import React, { Suspense, lazy, useEffect } from "react";

const RemoteComponent = ({ url, component }) => {
  const Component = lazy(
    () =>
      new Promise((resolve) => {
        if (window[component]) return resolve({ default: window[component] });

        const script = document.createElement("script");
        script.src = url;

        script.onload = () => {
          resolve({
            default: window[component],
          });
        };

        document.head.appendChild(script);
      })
  );

  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};

export default RemoteComponent;
