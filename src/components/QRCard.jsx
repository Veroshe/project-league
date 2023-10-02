import {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {QRScanner} from "./QRScanner";
import useLocalStorage from "use-local-storage";
import {cardStyles, cardActionsStyles} from "./cardStyles";

export const QRCard = ({storageKey}) => {
  const [openModal, setOpenModal] = useState(false);
  const [key] = useLocalStorage(storageKey);

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
      <Card sx={cardStyles} className={key && "disabled"}>
        <CardContent>
          <Typography variant="h3">Zadanie 1 {key && "- wykonane"}</Typography>
          <Typography>
            Zeskanuj kod QR pod Teemo na stoisku blah blah blah
          </Typography>
        </CardContent>
        <CardActions sx={cardActionsStyles}>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            //disabled={key === "set"}
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
