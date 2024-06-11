import {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {QRScanner} from "./QRScanner";
import {cardStyles, cardActionsStyles} from "./cardStyles";
import useLocalStorageState from "use-local-storage-state";

export const QRCard = ({storageKey}) => {
  var todaysDate = new Date();
  const [openModal, setOpenModal] = useState(false);
  const [teemo, setTeemo, {removeItem}] = useLocalStorageState("teemo");

  const isDoneToday =
    teemo &&
    new Date(teemo.date).setHours(0, 0, 0, 0) ===
      todaysDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (
      teemo &&
      new Date(teemo.date).setHours(0, 0, 0, 0) !==
        todaysDate.setHours(0, 0, 0, 0)
    ) {
      removeItem();
    }
  }, []);

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <QRScanner
            storageKey={storageKey}
            handleClose={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </Modal>
      <Card sx={cardStyles} className={isDoneToday && "disabled"}>
        <CardContent>
          <Typography>
            Znajdź Teemo z kodem QR i zeskanuj go (Psst! Poszukaj koło
            strzelnicy)
          </Typography>
        </CardContent>
        <CardActions sx={cardActionsStyles}>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            disabled={isDoneToday}
            variant="outlined"
            size="small"
          >
            Zeskanuj kod
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
