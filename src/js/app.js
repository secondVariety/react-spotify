import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import Sidebar from "../components/sidebar/sidebar";
import Main from "../components/main/main";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
