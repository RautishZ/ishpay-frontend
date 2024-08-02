import { RouterProvider } from "react-router-dom";
import router from "./router";
import Home from "./assets/login_user/Home";
import store from "../src/app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
        <RouterProvider router={router} />

        {/* <Dashboard /> */}
      </div>
    </Provider>
  );
}

export default App;
