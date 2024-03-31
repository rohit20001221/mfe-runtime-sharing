import RemoteComponentWithChildren from "./RemoteComponentWithChildren";
import RemoteComponent from "./RemoteComponent";

const App = () => {
  return (
    <RemoteComponentWithChildren
      url={"http://localhost:4000/index.js"}
      component={"___REACT_UI_COMPONENTS__Container"}
    >
      <RemoteComponent
        url={"http://localhost:4000/index.js"}
        component={"___REACT_UI_COMPONENTS__APP"}
      />
    </RemoteComponentWithChildren>
  );
};

export default App;
