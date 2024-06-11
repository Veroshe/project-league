import {Scanner} from "@yudiel/react-qr-scanner";
import useLocalStorageState from "use-local-storage-state";

export const QRScanner = ({handleClose}) => {
  const [teemo, setTeemo] = useLocalStorageState("teemo", {defaultValue: null});
  var todaysDate = new Date();

  const handleScan = (result) => {
    if (result[0].rawValue === "Teemo") {
      setTeemo({date: todaysDate});
      handleClose();
    }
  };

  return <Scanner onScan={handleScan} />;
};
