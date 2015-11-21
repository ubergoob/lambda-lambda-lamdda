# lambda-lambda-lamdda
Simple (hopefully) way to publish AWS lambda nodejs functions. Frustrated with the "frameworks", I just wanted a way to publish a simple lambda script without all the hoopla.

** this is a work in progress... it's just a mess right now

This uses grunt-aws-lambda (https://github.com/Tim-B/grunt-aws-lambda). Some things are inferred that you know how to do (like creating aws credentials). If not, for the sake of not duplicating documentation, please read the documentation for grunt-aws-lambda, there is detailed information there.

requirements
grunt-cli
aws-cli credentials profile with valid credentials to the lambda being deployed to. 
an arn for the lambda function you will be deploying to

log into aws console and create a new lambda function. you can just use the "hello world" template as it will be overwritten anyway. You will need the ARN once created. 

copy lambda_template to new folder. suggested naming of your function
in new dir, npm install
update package.json with your project information
copy aws.json.template to aws.json
update aws.json
