export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
};

export const getLatestNotification = () => {
  return "<string>Urgent requirement</string> - complete by EOD";
}