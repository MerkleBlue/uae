// ##############################
// // // Modal component styles
// #############################

const uaeBuyTokensModalStyle = theme => ({
  modalRoot: {
    overflow: "auto",
    alignItems: "unset",
    justifyContent: "unset"
  },
  modal: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
      margin: "1.75rem auto"
    },
    borderRadius: "6px",
    marginTop: "100px !important",
    overflow: "visible",
    maxHeight: "unset",
    position: "relative",
    height: "fit-content"
  },
  modalHeader: {
    borderRadius: "6px",
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143"
  },
  modalCloseButton: {
    color: "#999999",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    overflow: "visible"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  modalFooterRight: {
    float: "right"
  },
  instructionNoticeModal: {
    marginBottom: "25px"
  },
  imageNoticeModal: {
    maxWidth: "150px"
  },
  modalSmall: {
    width: "300px"
  },
  modalSmallBody: {
    paddingTop: "0"
  },
  modalSmallFooterFirstButton: {
    margin: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "auto"
  },
  modalSmallFooterSecondButton: {
    marginBottom: "0",
    marginLeft: "5px"
  },
  copyButton: {
    borderTopRightRadius: "30px !important",
    borderBottomRightRadius: "30px !important"
  },
  copyToClipboard: {
    color: "#FFFFFF !important"
  }
});

export default uaeBuyTokensModalStyle;
