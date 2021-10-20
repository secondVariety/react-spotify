import ReactDOM from "react-dom";
import Sidebar from "../components/sidebar/sidebar";
import Main from "../components/main/main";


const App = () => {
  return (
    <div>
      <Sidebar />
      <Main />
      <SearchParams />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

