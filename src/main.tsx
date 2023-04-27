import ReactDOM from "react-dom/client";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const root: HTMLElement = document.getElementById("app") as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
