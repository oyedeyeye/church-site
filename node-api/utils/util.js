// Create reverse timestamps for the rowKey
const createReverseTimeStamp = () => {
  const maxTimestamp = new Date(9999, 11, 31).getTime(); // December 31, 9999)
  return (maxTimestamp - Date.now()).toString();
}


module.exports = createReverseTimeStamp;