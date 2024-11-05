const handleError = ({ field, returnMessage, error }) => {
  if (returnMessage) {
    return error[field];
  } else {
    return error[field] ? "border-red-600 border-[1px]" : "";
  }
};

export default handleError;
