import React, { useState } from "react";
import { Toggle } from "@cred/neopop-web/lib/components";
import { colorGuide } from "@cred/neopop-web/lib/primitives";
import { Box } from "@mui/material";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setIsChecked(event.target.checked);
  };

  return (
    <Box
    sx={{
      display:"flex",
      justifyContent:"center",
      pt:"30%"
    }}
    >
      <Toggle
        isChecked={isChecked}
        colorConfig={colorGuide.lightComponents.toggle}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ToggleButton;
