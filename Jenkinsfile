pipeline {
    agent any
    tools {
       nodejs "nodejs"
    }
    environment {
        NODEJS_HOME = tool name: 'NodeJS 18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/NEWmod404/devops_auth', branch: 'main'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
