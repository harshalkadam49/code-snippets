import { ScoreMeter } from "@cred/neopop-web/lib/components";
import { Box, Slider } from "@mui/material";
import { useState } from "react";

const ScoreMeterExample = () => {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: "30%",
      }}
    >
      <ScoreMeter
        colorConfig={{
          dotColor: "green",
          indicatorColors: {
            decrement: "#FFB098",
            increment: "#5CDDBE",
            neutral: "#e2e2e2",
          },
          meterBorderColor: "#E0E0E0",
          meterStrokeBackground: "transparent",
          meterStrokeColor: {
            average: "#EDFE79",
            excellent: "#06C270",
            poor: "#F29947",
          },
          scoreColor: "#0d0d0d",
          scoreContainerBackground: "#EFEFEF",
          scoreContainerBorder: "#FBFBFB",
        }}
        colorMode="dark"
        lowerLimit={300}
        oldReading={value}
        reading={780}
        showIndicators
        upperLimit={900}
      />

    </Box>
  );
};

export default ScoreMeterExample;
