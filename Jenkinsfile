pipeline {
    agent any
    tools {
        nodejs 'NodeJS 18'   
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/NEWmod404/devops_auth.git', branch: 'main'
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
