import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root: HTMLElement = document.getElementById("app") as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
