import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/main/Home";
import TestPage from "./pages/testPage/TestPage";
import Header from "./components/header/Header";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/*" element={<Home />} />
            <Route path="/test-page" element={<TestPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
