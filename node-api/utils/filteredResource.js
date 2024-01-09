const gt = process.env;


async function filteredResource(result) {
  try {
    // Directly extract and modify the properties of the result object
    const {
      partitionKey,
      rowKey,
      timestamp: date,
      // date,
      theme,
      title,
      description,
      youtubeLink,
      preacher,
      preacherThumbnail,// default to S. P. Ayodeji on the frontend
      pdfFile,
      audioFile
    } = result;
      const modifiedEntities = {
        partitionKey,
        rowKey,
        // messageThumbnail: `https://${gt.ACCOUNT_NAME}.blob.core.windows.net/${gt.IMAGE_CONTAINER_NAME}/${messageThumbnail}`,
        date,
        theme,
        title,
        description,
        preacher,
        preacherThumbnail: preacherThumbnail || "",
        fileName: pdfFile.split('.')[0] || audioFile.split('.')[0],
        pdfFileLink: pdfFile ? `https://${gt.ACCOUNT_NAME}.blob.core.windows.net/${gt.PDF_CONTAINER_NAME}/${pdfFile}` : "",
        audioFileLink: audioFile ? `https://${gt.ACCOUNT_NAME}.blob.core.windows.net/${gt.AUDIO_CONTAINER_NAME}/${audioFile}` : ""
      };

      return modifiedEntities;
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = filteredResource;
