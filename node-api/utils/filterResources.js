const gt = process.env;

async function filterResources(result) {
  try {
    const modifiedEntities = await result.entites.map(({
      partitionKey,
      rowKey,
      messageThumbnail,
      timestamp: date,
      theme,
      title,
      caption,
      preacher,
      preacherThumbnail
    }) => ({ 
        partitionKey,
        rowKey,
        messageThumbnail: `https://${gt.ACCOUNT_NAME}.blob.core.windows.net/${gt.IMAGE_CONTAINER_NAME}/${messageThumbnail}.jpg`,
        date,
        theme,
        title,
        caption: caption ? caption : 'default',
        preacher,
        preacherThumbnail }));

      console.log(modifiedEntities);

      return {
        entities: modifiedEntities,
        nextContinuationToken: result.nextContinuationToken
      }
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = filterResources;
