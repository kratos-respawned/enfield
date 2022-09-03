import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Support from "./Pages/Support";
import Motorcycles from "./Pages/Motorcycle";
function App() {
  return (
    <>
      <div className="bg-[#212121] h-screen">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Support />} />
        <Route path="/motorcycle" element={<Motorcycles />} />
      </Routes> */}
      <Motorcycles/>
      </div>
    </>
  );
}

export default App;
