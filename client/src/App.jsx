import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Login, Register, Dashboard, NotFound, Homepage } from "./pages";
import { useSelector } from "react-redux";

const App = () => {
  const getData = useSelector((state) => state);

  const isLoggedIn = getData.isLoggedIn;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {isLoggedIn && <Route path="/user" element={<Dashboard />} />}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
