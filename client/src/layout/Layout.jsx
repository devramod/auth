import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import background from "../assets/background.jpg";

const Layout = () => {
  return (
    <>
      <Toaster />
      <Box
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <main
          style={{
            width: "100%",
            minHeight: "calc(100vh - 80px)",
          }}
        >
          <Outlet />
        </main>
      </Box>
    </>
  );
};

export default Layout;
