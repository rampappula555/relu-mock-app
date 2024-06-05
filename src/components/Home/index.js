import "./index.css";
import Sidebar from "../Sidebar";
import Content from "../Content";
function Home() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Home;
