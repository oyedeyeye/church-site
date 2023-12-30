const gt = process.env;

const captionDefault = `A Christian Home centers on the relationship between family members, particularly the foundational role of marriage. It emphasizes that marriage and family life require thorough preparation, as the strength of a family's foundation significantly impacts its longevity and health.`

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
        messageThumbnail: `https://${gt.ACCOUNT_NAME}.blob.core.windows.net/${gt.IMAGE_CONTAINER_NAME}/${messageThumbnail}`,
        date,
        theme,
        title,
        caption: caption ? caption : captionDefault,
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
