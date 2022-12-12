import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Popover,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Form from "../form/from";
const Rightbar = () => {
  const [open, setOpen] = useState(false);

  const hendeler = () => {
    console.log("hendeler function is here");
    setOpen(!open);
  };
  return (
    <Box p={2} sx={{ backgroundColor: "white", flex: "1" }}>
      <Box sx={{position:"fixed"}}>
      <Typography sx={{ marginRight: "30px" }}>online Freinds</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Box 
          sx={{ 
            marginTop: "10px" 
            }}>
              {open && <Form />}</Box>
      <Box
        sx={{
          color: "red",
          position: "fixed",
          cursor: "pointer",
          bottom: "20px",
          right: "40px",
        }}
      >
        <Button
          onClick={hendeler}
          sx={{ backgroundColor: "blue", color: "black" }}
        >
          <ContactSupportIcon />
           click to Support
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
