import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/hotels" element={<List></List>}>
        </Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

