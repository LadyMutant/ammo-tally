pipeline {
  agent any
  environment {
    APPLICATION = 'opapp'
    ENVIRONMENT = 'prod'
    MAINTAINER_NAME = 'gemma'
    MAINTAINER_EMAIL = 'gemma@dominey.io'
  }

  stages {
    stage('clone repository') {
      steps {
        checkout scm
      }
    }

    stage('Deploy container') {
      steps {
        script {
          sshagent(credentials : ['matt-mbp-ssh-key']) {
            sh '''
              ssh -t -t root@172.99.75.160 'bash -s << 'ENDSSH'
                docker stop opapp
                docker rm opapp
                cd /root/opapp
                git clone
                docker build -t opapp .
                docker run -d --restart=always -p 80:8080 opapp
ENDSSH'
        '''
          }
        }
      }
    }
  }
}
