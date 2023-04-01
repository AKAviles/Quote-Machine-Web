#!/usr/bin/env groovy 

/*
    1. Build Docker Image:
        - Variables
            - Docker file path
            - Service name abv
            - AWS Credentials
            - Aws role and roleArn
            - Aws docker namespace
            - Aws ecr url east
            - Aws ecr tag
        - Methods
            - get aws credentials
            - Build docker image in ecr
    2. Push Docker image to ecr
        - Methods
            - get aws credentials
            - push image to ecr
    3. Deploy Image in EKS

*/

pipeline {
    agent any

    environment {
        AWS_ECR_URL = '014920475271.dkr.ecr.us-east-1.amazonaws.com/quote-machine'
        
    }

    stages {
        stage('Build Docker Image') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-resources',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        sh "echo 'made it'"
                    }
            }
        }
    }
}