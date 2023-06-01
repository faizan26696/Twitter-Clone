import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function MiddleFirst() {
    const [value, setValue] = React.useState("one");
    function handleChange(event, newValue) {
      setValue(newValue);
    }
   
  return (
    <>
      <Box>
        <Tabs>
          <Tab
            sx={{
              fontWeight: "bold",
              color: "rgb(30, 30, 30)",
              fontSize: "20px",
              textTransform: "none",
            }}
            label="Home"
          />
        </Tabs>
      </Box>
      <br />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            label="For You"
            value="one"
            sx={{ marginRight: "20%", marginLeft: "20%", fontSize: "15px" }}
          />
          <Tab value="two"  label="Following" sx={{ fontSize: "15px" }} />
        </Tabs>
      </Box>
    </>
  );
}

export default MiddleFirst