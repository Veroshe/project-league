import "./Header.scss";

import Typography from "@mui/material/Typography";

export const HeaderText = () => {
  return (
    <div className="header-text">
      <Typography variant="h1" color="secondary">
        Witaj przywoływaczu!
      </Typography>
      <Typography variant="p" color="primary" className="list">
        Oto lista Twoich zadań:
      </Typography>
    </div>
  );
};
