import { Alert, Snackbar } from "@mui/material";

const ErrorModal = (props) => {
  return (
    <Snackbar
      open={props.showToast}
      autoHideDuration={6000}
      onClose={props.onCloseModel}
    >
      <Alert
        onClose={props.onCloseModel}
        severity="success"
        sx={{ width: "100%" }}
      >
        Error while fetching the data
      </Alert>
    </Snackbar>
  );
};

export default ErrorModal;
