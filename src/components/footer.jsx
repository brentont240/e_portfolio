import waveDivider from "../assets/layeredWaves.svg";
import { Box } from "@mui/material";

// maybe get the thing to work idk????
function Footer() {
  return (
    <>
    <Box sx={{ width: "100%" }}>
    <img 
          src={waveDivider} 
          alt="divider"
          style={{ 
            width: "100%",
            display: "block"
          }}
        />
    </Box>
      <footer></footer>
    </>
  );
}

export default Footer;
