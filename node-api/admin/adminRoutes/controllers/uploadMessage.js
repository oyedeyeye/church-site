const mainTable = require("../../../utils/db");
const storageContainer = require("../../../utils/storage");
const getFileExtension = require("../../utils/fileExt");
const createReverseTimeStamp = require('../../utils/util');
const { setLogLevel } = require("@azure/logger");
setLogLevel("info");


const uploadMessage = async (request, response) => {
  // Data object
  try {
    const data = {
      'theme': request.body.theme,
      'title': request.body.title,
      'caption': request.body.caption,
      'description': request.body.description,
      'partitionKey': request.body.serviceTag,
      'youtubeLink': request.body.youtubeLink,
      'preacher': request.body.preacher,
      'preacherThumbnail': request.body.preacherThumbnail
    };

    // Generate timestamp for blob name
    // const blobName = `${request.body.serviceTag}-${new Date().getTime()}`;
    const timestamp = new Date().getTime();

    // rowKey Using UUID V4
    if (request.body !== null) {
      // implement the UUID for rowKey
      // const rowKey = uuidv4();

      const rowKey = createReverseTimeStamp();
      data['rowKey'] = rowKey;
    }

    // Message thumbnail Blob ======================================================
    if (request.body.messageThumbnail !== null) {
      // create blob name for message thumnail
      const fileExt = getFileExtension(request.body.messageThumbnail);
      const thumbnailBlobName = `${request.body.serviceTag}-${timestamp}.${fileExt}`;

      // Call the function to get the ContainerClient that Uploads to Image blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.imageClient(),
          request.body.messageThumbnail,
          thumbnailBlobName)
          .then(() => {data['messageThumbnail'] = thumbnailBlobName})
          .catch((err) => {
            response.status(500).json({
              message: 'Message thumbnail upload failed!',
              data: err.message,
            });
          });
    }

    // for PDF file Blob ======================================================
    if (request.body.pdfFile !== null) {
      // create blob name for pdf
      const fileExt = getFileExtension(request.body.pdfFile);
      const pdfBlobName = `${request.body.serviceTag}-${timestamp}.${fileExt}`;


      // Call the function to get the ContainerClient that Uploads to pdf block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.pdfClient(),
          request.body.pdfFile,
          pdfBlobName)
          .then(() => data['pdfFile'] = pdfBlobName)
          .catch((err) => {
            response.status(500).json({
              message: 'PDF file upload failed',
              data: err.message,
            });
          });
    }

    if (request.body.audioFile !== null) {
      // create blob name for audio file
      const fileExt = getFileExtension(request.body.audioFile);
      const audioBlobName = `${request.body.serviceTag}-${timestamp}.${fileExt}`;

      // Call the function to get the ContainerClient that Uploads to audio block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.audioClient(),
          request.body.audioFile,
          audioBlobName)
          .then(() => data['audioFile'] = audioBlobName)
          .catch((err) => {
            response.status(500).json({
              message: 'Audio file upload failed',
              data: err.message,
            });
          })
    }

    // console.log(data);

    // Create Database entry for data object
    await mainTable.createRecord(data)
      .then((result) => response.status(201).json(result))
      .catch((e) => {
        response.status(500).json({
          message: 'Error creating database entry',
          data: e.message,
        });
      });

  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
}

module.exports = uploadMessage;
