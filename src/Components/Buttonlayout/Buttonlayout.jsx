import "./Buttonlayout.css";
import { Button } from "@mui/material";

const Buttonlayout = (props) => {
  return (
    <div className="buttonwrapper">
      <Button variant="contained" size="small">
        {props.button1}
      </Button>
      <Button variant="outlined" size="small">
        {props.button2}
      </Button>
    </div>
  );
};

export default Buttonlayout;
