const S3Utils = require('./lib/s3-utils');
const bucketName = process.env.BUCKET;

module.exports.main = async function (event, context) {

  try {
    var files = await S3Utils.getFiles(event, bucketName);
    //console.log(files)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify(files)
    };

  } catch (error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: body
    }
  }

};