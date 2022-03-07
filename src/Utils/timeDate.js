export const timeDate = (timecode) => {
  const niceDate = new Date(timecode).toLocaleDateString("en-GB");
  return niceDate;
};
