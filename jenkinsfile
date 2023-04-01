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
        AWS_ECR_URL = 'https://014920475271.dkr.ecr.us-east-1.amazonaws.com'
        AWS_ECR_NAME = 'quote-machine/quote-machine-web'
        
    }

    stages {
        stage('Build Docker Image - tried version') {
            steps {
                script {
                    docker.build("${AWS_ECR_NAME}")
                }
            }
        }

       stage('Deploy Docker Image') {
            steps {
                script {
                    docker.withRegistry("${AWS_ECR_URL}", 'ecr:us-east-1:aws-resources') {
                        docker.image("${AWS_ECR_NAME}").push('latest')
                    }
                }
            }
       }
    }
}