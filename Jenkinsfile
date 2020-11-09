pipeline {
  agent any
  environment {
    APPLICATION = 'opapp'
    ENVIRONMENT = 'prod'
    MAINTAINER_NAME = 'gemma'
    MAINTAINER_EMAIL = 'gemma@dominey.io'
    REGISTRY_CREDS = credentials('registry-auth')
  }

  stages {
    stage('clone repository') {
      steps {
        checkout scm
      }
    }

    stage('build and push container') {
      steps {
        script {
          docker.withRegistry('http://registry.dominey.cloud:5000', 'registry-auth') {
            def container = docker.build("ammo-tally:${env.BUILD_ID}")
            container.push('latest')
          }
        }
      }
    }

    stage('Deploy container') {
      steps {
        script {
          sshagent(credentials : ['matt-mbp-ssh-key']) {
            sh '''
              ssh -t -t root@172.99.75.160 -o StrictHostKeyChecking=no 'bash -s << 'ENDSSH'
                docker stop ammo-tally
                docker rm ammo-tally
                docker login -u jenkins -p $REGISTRY_CREDS_PSW http://registry.dominey.cloud:5000
                docker pull registry.dominey.cloud:5000/ammo-tally:latest
                docker run -d --restart=always --name=ammo-tally -p 80:8080 registry.dominey.cloud:5000/ammo-tally
ENDSSH'
        '''
          }
        }
      }
    }
  }
}
