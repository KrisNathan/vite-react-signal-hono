import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
