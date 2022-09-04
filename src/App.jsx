import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Support from "./Pages/Support";
import Motorcycles from "./Pages/Motorcycle";
function App() {
  return (
    <>
      <div className="bg-[#212121] h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Motorcycles />} />
          <Route path="/s" element={<Support />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
