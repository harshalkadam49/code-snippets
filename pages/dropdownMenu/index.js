import { StrictMode, useState } from "react";
import App from "../dropdownMenu/app";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <App key={count} />
    </StrictMode>
  );
}

export default AppWithUI;
