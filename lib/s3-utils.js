const AWS = require('aws-sdk');

// Set your AWS Profile - Uncomment to test locally
// var credentials = new AWS.SharedIniFileCredentials({ profile: 'devProfile' });
// AWS.config.credentials = credentials;

const S3 = new AWS.S3();

async function getFiles(event, bucketName) {


    const data = await S3.listObjectsV2({ Bucket: bucketName }).promise();
    var body = {
        files: data.Contents.map(function (e) { return e.Key })
    };
    //console.log(bucketName);
    //console.log(body);

    return body;
}

module.exports.getFiles = getFiles;

function sayHello(event) {
    return {
        message: "Hello World!",
        input: event,
    };
}

module.exports.sayHello = sayHello;