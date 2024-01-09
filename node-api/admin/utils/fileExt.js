// Utility function to extract file extention

const getFileExtension = (fileName) => {
  return fileName.split('.').pop();
};

module.exports = getFileExtension;
