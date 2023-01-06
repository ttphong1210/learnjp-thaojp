import { Fragment } from "react";
import MasterLayout from "@layouts/masterLayout";
import Home from "@pages/home";

const App = () => {
  return (
    <Fragment>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Text title="Hello AsurRaa" />
          <DatePicker />
        </div>
      </div> */}
      {/* <MasterLayout/> */}
      <Home></Home>
    </Fragment>
  );
};

export default App;
