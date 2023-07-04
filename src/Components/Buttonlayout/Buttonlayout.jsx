import React from "react";
import "./Buttonlayout.css";
import { Button } from "@mui/material";

const Buttonlayout = (props) => {
	return (
		<div className="buttonwrapper">
			<Button
				variant="contained"
				size="small"
				onClick={props.onButton1Click}
			>
				{props.button1}
			</Button>
			<Button
				variant="outlined"
				size="small"
				onClick={props.onButton2Click}
			>
				{props.button2}
			</Button>
		</div>
	);
};

export default Buttonlayout;
