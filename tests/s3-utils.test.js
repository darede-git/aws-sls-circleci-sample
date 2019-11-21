const mainHandler = require('../handler');


describe('main', () => {
    var event = {};
    var context = {};


    it('should call main Handler function with success', () => {
        async () => {
            result = await mainHandler.main(event, context);
            expect(result.statusCode).toBe(200);
            console.log(result);
        }
    });
});



const S3_Utils = require('../lib/s3-utils');
const bucketName = process.env.BUCKET;


describe('s3-utils-hello', () => {
    var event = {};

    it('should call sayHello and return message', () => {
        expect(S3_Utils.sayHello(event).message).toBe('Hello World!');
    });

});


describe('s3-utils-getFiles', () => {
    var event = {};

    it('should call getFiles and return content', () => {
        async () => {
            files = await S3Utils.getFiles(event, bucketName);
            expect(files).toContain('files');
            console.log(files);
        }
    });

});