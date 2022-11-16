import { Button } from "@mui/material";
import React from "react";

function ButtonContained({ children }) {
	return (
		<Button variant="contained" sx={{ fontSize: "12px", background: "#131e47", textTransform: "none", padding: "6px 28px" }}>
			{children}
		</Button>
	);
}

export default ButtonContained;
