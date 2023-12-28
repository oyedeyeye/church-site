const mainTable = require("../../../utils/db");
const storageContainer = require("../../../utils/storage");


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

    // create a new blob
    const blobName = `${request.body.serviceTag}-${new Date().getTime()}`;

    // rowKey Using UUID V4
    if (request.body !== null) {
      // implement the UUID for rowKey
      // const rowKey = uuidv4();

      const rowKey = createReverseTimeStamp();
      data['rowKey'] = rowKey;
    }

    // Message thumbnail Blob ======================================================
    if (request.body.messageThumbnail !== null) {
      // implement uploAD BLOB for process.env.IMAGE_CONTAINER_NAME

      // upload to block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.imageClient,
          request.body.messageThumbnail,
          blobName,
          (name) => {
            data['messageThumbnail'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'Message thumbnail upload failed!',
              data: err.message,
            });
          }
          );
    }

    // PDF file Blob ======================================================
    if (request.body.pdfFile !== null) {

      // Upload to pdf block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.pdfClient,
          request.body.pdfFile,
          (name) => {
            data['pdfFile'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'PDF file upload failed',
              data: err.message,
            });
          }
        )
    }

    if (request.body.audioFile !== null) {

      // Upload to audio block blob
      await storageContainer
        .uploadBlobToContainer(
          storageContainer.audioClient,
          request.body.audioFile,
          (name) => {
            data['audioFile'] = name;
          },
          (err) => {
            response.status(500).json({
              message: 'Audio file upload failed',
              data: err.message,
            });
          }
        )
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
