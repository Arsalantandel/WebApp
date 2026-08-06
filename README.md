# 🚀 AI Static Website Deployment on Microsoft Azure using Terraform & Docker

> End-to-end Cloud & DevOps project demonstrating Infrastructure as Code (Terraform), Docker containerization, Azure App Service, Azure Container Registry, and Azure Monitoring.

![Azure](https://img.shields.io/badge/Azure-Cloud-blue?logo=microsoftazure)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?logo=terraform)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)

---

# 📖 Project Overview

This project demonstrates how to build, containerize, deploy, and monitor an AI-generated static website on **Microsoft Azure** using modern Cloud and DevOps practices.

The website was first generated using **Google AI Studio** through prompt engineering. The generated source code was then exported to a local development environment where Docker, Terraform, and Azure services were used to automate deployment.

This project showcases a practical cloud deployment workflow suitable for beginners learning Azure and Terraform.

---

# 🏗️ Project Architecture

<img width="1536" height="1024" alt="WhatsApp Image 2026-08-06 at 9 04 25 PM" src="https://github.com/user-attachments/assets/a60fa6c6-b76d-4c03-b448-6f2b7fd41f69" />


---

# 🚀 Technologies Used

- Google AI Studio
- Visual Studio Code
- Docker
- Terraform
- Microsoft Azure
- Azure Resource Group
- Azure App Service (Linux Web App)
- Azure App Service Plan
- Azure Container Registry (ACR)
- Azure Application Insights
- Azure Log Analytics Workspace
- Azure Monitor
- Git
- GitHub

---

# 📂 Azure Resources Created

| Resource | Purpose |
|----------|----------|
| Resource Group | Logical container for Azure resources |
| Azure Container Registry | Stores Docker images |
| Azure App Service Plan | Compute resources for the Web App |
| Linux Web App | Hosts the Docker container |
| Application Insights | Application monitoring |

---

# 🔄 Project Workflow

## Step 1 – Generate Website using Google AI Studio

The static website was generated using **Google AI Studio** by providing prompts.

The generated project was exported and downloaded to the local machine.

---

## Step 2 – Open Project in Visual Studio Code

Import the exported website into VS Code.

Verify that the application runs correctly before containerization.

---

## Step 3 – Build Docker Image

Build the Docker image.

```bash
docker build -t ai-webapp:v1 .
```

Run the container locally.

```bash
docker run -d -p 80:80 ai-webapp:v1
```

Open the browser.

```
http://localhost
```

---

## Step 4 – Login to Azure

```bash
az login
```

---

## Step 5 – Login to Azure Container Registry

```bash
az acr login --name <your-acr-name>
```

---

## Step 6 – Tag Docker Image

```bash
docker tag ai-webapp:v1 <your-acr-name>.azurecr.io/ai-webapp:v1
```

---

## Step 7 – Push Docker Image

```bash
docker push <your-acr-name>.azurecr.io/ai-webapp:v1
```

The image is now stored inside Azure Container Registry.

---

# ☁️ Infrastructure as Code (Terraform)

Terraform provisions the following Azure resources automatically.

- Resource Group
- Azure Container Registry
- App Service Plan
- Linux Web App
- Application Insights
- Log Analytics Workspace

Initialize Terraform.

```bash
terraform init
```

Validate the configuration.

```bash
terraform validate
```

Preview the deployment.

```bash
terraform plan
```

Deploy infrastructure.

```bash
terraform apply -auto-approve
```

---

# 🐳 Deploy Docker Container

The Linux Web App is configured to pull the Docker image directly from Azure Container Registry.

Deployment flow:

```
Docker Image
      │
      ▼
Azure Container Registry
      │
      ▼
Azure Linux Web App
```

---

# 📊 Monitoring

Monitoring is implemented using Azure native services.

---

# ▶️ How to Run This Project

Clone the repository.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Move into the project.

```bash
cd YOUR_REPOSITORY
```

Initialize Terraform.

```bash
terraform init
```

Preview the deployment.

```bash
terraform plan
```

Deploy Azure resources.

```bash
terraform apply -auto-approve
```

Build Docker image.

```bash
docker build -t ai-webapp:v1 .
```

Push the image to Azure Container Registry.

Restart the Linux Web App.

Open the application using the Azure Web App URL.

---

# 🧹 Clean Up

Destroy all Azure resources.

```bash
terraform destroy -auto-approve
```

This helps avoid unnecessary Azure charges.

---

# 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Google AI Studio
- Infrastructure as Code (Terraform)
- Docker
- Microsoft Azure
- Azure Container Registry
- Azure App Service
- Azure Monitoring
- Azure Application Insights
- Log Analytics Workspace
- Cloud Deployment
- Git & GitHub

---

# 📸 Screenshots

<img width="1279" height="1600" alt="WhatsApp Image 2026-08-06 at 9 33 59 PM" src="https://github.com/user-attachments/assets/2ae26e2b-52a5-4932-adb0-0669a6d28423" />

<img width="1279" height="1600" alt="WhatsApp Image 2026-08-06 at 9 33 59 PM (1)" src="https://github.com/user-attachments/assets/3f8aaf1a-8ab2-4c8d-b562-fffec909c7cc" />

<img width="1279" height="1600" alt="WhatsApp Image 2026-08-06 at 9 33 58 PM" src="https://github.com/user-attachments/assets/a3351c1a-585b-4304-982c-320e2d343fdd" />






---





