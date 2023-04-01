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
        AWS_ECR_NAME = 'quote-machine/quote-machine-web'
        
    }

    stages {
        

        stage('Build - other version') {
            steps {
                script {
                    app = docker.build("${AWS_ECR_NAME}:0.0.1")
                }
            }
        }

        stage('Deploy to ECR') {
            steps {
                script {
                    docker.withRegistry('014920475271.dkr.ecr.us-east-1.amazonaws.com/quote-machine', 'ecr:us-east-2:aws-resources') {
                        app.push()
                    }
                }
            }
        }
    }
}