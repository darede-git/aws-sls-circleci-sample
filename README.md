# Hello World with Circle CI and Serverless Framework

A serverless NodeJS app using CI with CircleCI.

## Install Dependencies

``` npm install jest ```
``` npm install aws-sdk ```

## Run Tests

``` npm test --coverage ```

## Handling Serverless Project

Declare environment:

``` set BUCKET=<your-bucket> ```
or
``` export BUCKET=<your-bucket> ```

Local SLS Test:

To test it locally, you must have a AWS profile and set it on file s3-utils.js in line 4.

``` sls invoke local -f SimpleS3List ``` 

Create Project

``` sls deploy ```

Destroy Project

``` sls remove ```

## References

https://serverless.com/blog/ci-cd-workflow-serverless-apps-with-circleci/