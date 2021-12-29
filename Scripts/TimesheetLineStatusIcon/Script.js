var iconState = $State;

if (iconState === "ES.TSState_Submitted") {
  return "fas fa-file-upload";
} else if (iconState === "ES.TSState_Invoiced") {
  return "fas fa-thumbs-up";
} else if (iconState === "ES.TSState_Cancelled") {
  return "fas fa-thumbs-down";
} else if (iconState === "ES.TSState_Draft") {
  return "fas fa-pen";
} else if (iconState === "ES.TSState_ToBeApproved") {
  return "fas fa-hand-paper";
} else {
  return "fas fa-file-alt";
}