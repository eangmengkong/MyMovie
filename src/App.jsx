import "./App.css";
import { useEffect } from "react";
import { Pages } from "./components/pages/Pages";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
