import React, { Suspense, lazy } from "react";

const RemoteComponent = ({ url, component, children }) => {
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
      <Component>{children}</Component>
    </Suspense>
  );
};

export default RemoteComponent;
