import QrReader from "react-qr-scanner";
import useLocalStorage from "use-local-storage";

export const QRScanner = ({storageKey, handleClose}) => {
  const [key, setKey] = useLocalStorage(storageKey, "set");

  console.log(key);

  return (
    <QrReader
      delay={200}
      onError={() => {
        console.log("error");
      }}
      onScan={(data) => {
        console.log(data);
        if (data && data.text === "https://google.pl") {
          setKey("set");
          handleClose();
        }
      }}
    />
  );
};
