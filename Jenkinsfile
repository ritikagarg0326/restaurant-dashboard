pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('docker-username')
        DOCKER_PASSWORD = credentials('docker-password')
        BACKEND_IMAGE = "restaurant-backend"
        FRONTEND_IMAGE = "restaurant-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        // ───────── LINT ─────────
        stage('Lint Backend') {
            steps {
                sh '''
                cd backend
                pip install flake8
                flake8 . --max-line-length=120 || true
                '''
            }
        }

        stage('Lint Frontend') {
            steps {
                sh '''
                cd frontend
                npm install
                npm run lint || true
                '''
            }
        }

        // ───────── TEST ─────────
        stage('Test Backend') {
            steps {
                sh '''
                cd backend
                pip install -r requirements.txt
                pip install pytest
                pytest || true
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                cd frontend
                npm install
                npm run build
                '''
            }
        }

        // ───────── DOCKER ─────────
        stage('Build & Push Docker Images') {
            steps {
                script {
                    def sha = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()

                    sh """
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

                    docker build -t $DOCKER_USERNAME/$BACKEND_IMAGE:$sha ./backend
                    docker build -t $DOCKER_USERNAME/$BACKEND_IMAGE:latest ./backend

                    docker build -t $DOCKER_USERNAME/$FRONTEND_IMAGE:$sha ./frontend
                    docker build -t $DOCKER_USERNAME/$FRONTEND_IMAGE:latest ./frontend

                    docker push $DOCKER_USERNAME/$BACKEND_IMAGE:$sha
                    docker push $DOCKER_USERNAME/$BACKEND_IMAGE:latest

                    docker push $DOCKER_USERNAME/$FRONTEND_IMAGE:$sha
                    docker push $DOCKER_USERNAME/$FRONTEND_IMAGE:latest
                    """
                }
            }
        }
    }
}