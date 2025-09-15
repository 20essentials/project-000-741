import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

const appStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  backgroundImage: "repeating-conic-gradient(from -180deg at 50% 50%, #1b7b2c 0deg, #cb96da 60deg)",
  backgroundSize: "48px 48px",
  fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  scrollBehavior: "smooth",
};

const App = () => {
  return <div style={appStyles}></div>;
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = ReactDOM.createRoot(rootEl);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

export default App;
