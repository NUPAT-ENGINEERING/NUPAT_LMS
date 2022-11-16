import { Button } from "@mui/material";
import React from "react";

function ButtonOutline({ children }) {
	return (
		<Button
			variant="outlined"
			sx={{
				fontSize: "12px",
				border: "1px solid #131e47",
				color: "#131e47",
				textTransform: "none",
				padding: "5px 28px",
				marginLeft: "10px",
			}}>
			{children}
		</Button>
	);
}

export default ButtonOutline;
