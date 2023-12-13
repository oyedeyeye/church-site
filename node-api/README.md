## End Point  `/resources`

Here's how you can set up the request in Postman:

### 1. Set the Request Type and URL

- **Request Type**: GET
- **URL**: This is the URL of your API endpoint. For example, `http://localhost:3000/resources` if your server is running locally on port 3000.

### 2. Add Query Parameters

- Add a query parameter for the continuation token. 
- Key: `continuationToken`
- Value: The continuation token you received from the first request. It should be a URL-encoded JSON string.

### 3. Send the Request

- Click on the "Send" button in Postman to make the request.

### Sample Setup in Postman:

- **Method**: GET
- **URL**: `http://localhost:3000/resources`
- **Params**:
   - Key: `continuationToken`
   - Value: `"yourContinuationTokenString"` (replace with your actual token)

It will look something like this in Postman:

```
GET http://localhost:3000/resources?continuationToken=yourContinuationTokenString
```

Make sure to replace `http://localhost:3000/resources` with your actual endpoint and `yourContinuationTokenString` with the actual continuation token you received. The continuation token should be URL-encoded, as it's passed as a query parameter.

### Note:

If you haven't yet made the first request or if you're setting up Postman from scratch, you would first make a request without the `continuationToken` parameter to get the first page and the initial continuation token. Then, use this token as described above for subsequent requests.

## Download End Point  `/download/:fileType/:fileName`

### Constructing the Request on the Frontend
When the user clicks on a download button, you should construct a request URL that includes both the file type and the file name. For example:

 - For downloading a PDF: `/download/pdf/filename.pdf`
 - For downloading an MP3: `/download/mp3/filename.mp3`

## Stream Endpoint `/stream/:fileName`
The `/stream/:fileName` route dynamically streams MP3 files based on the `fileName` parameter.

### Setting Content-Type

The Content-Type header is set to audio/mpeg to ensure correct handling by the audio player.

### Error Handling

The endpoint includes error handling for issues that might arise during streaming.

### Client-Side Player

The HTML audio player uses the endpoint as its source.

# Private Route 

## Delete Route `/admin/:partitionKey/:rowKey/:fileName`

The route parameters include `partitionKey`, `rowKey`, and `fileName`, which are used to identify the table record and the blobs to be deleted


