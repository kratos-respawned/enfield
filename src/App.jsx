import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Support from "./Pages/Support";
import Motorcycles from "./Pages/Motorcycle";
import Form from "./Pages/Form";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col bg-[#212121] h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Motorcycles />} />
          <Route path="/s" element={<Support />} />
          <Route path="/f" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
