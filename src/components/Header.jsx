import "./Header.scss";

import logo from "../assets/logo.svg";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <Typography className="gra" variant="h5">
          Gra konwentowa
        </Typography>
      </div>
    </div>
  );
};
