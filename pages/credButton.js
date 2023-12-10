import { Button } from "@cred/neopop-web/lib/components";
import { Box } from "@mui/material";
import { Typography } from "@cred/neopop-web/lib/components";

const Page = () => {
  return (
    <Box className="center backdrop">
      <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="dark"
        onClick={() => {
          console.log("I'm clicked");
        }}
        colorConfig={{
          backgroundColor: "#E5FE40",
          color: "#000",
          edgeColors: { right: "#A0B22D", bottom: "#A0B22D" },
        }}
      >
        <Typography color="#000">Click Me</Typography>
      </Button>
    </Box>
  );
};

export default Page;
