# Tobams Task API

Welcome to the Tobams Task API! This API allows you to upload and retrieve images.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Request Parameters](#request-parameters)
  - [Response Format](#response-format)

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/engamo/tobams-task.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tobams-task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

### Endpoints

#### 1. Upload Image
- **Endpoint:** `POST /api/images/upload`
- **Description:** Upload an image to the server.
- **Request Method:** `POST`
- **Request Body:**
  - Use form-data with the key `image` to upload the image file.

#### 2. Get Image
- **Endpoint:** `GET /api/images/get_image/:imageId`
- **Description:** Retrieve an image by its ID.
- **Request Method:** `GET`
- **URL Parameter:**
  - `imageId`: ID of the image you want to retrieve.

### Request Parameters

#### 1. Upload Image
- **Parameters:**
  - `image` (File): The image file to be uploaded.

#### 2. Get Image
- **Parameters:**
  - `imageId` (String): The ID of the image to be retrieved.

### Response Format

#### 1. Upload Image
- **Success Response:**
  ```json
  {
    "message": "Image uploaded successfully."
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "Invalid file type. Only JPG, PNG, and GIF are allowed."
  }
  ```

#### 2. Get Image
- **Success Response:**
  ```json
  {
    "imageUrl": "data:image/png;base64,iVBORw0K... (base64 image data)"
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "Image not found"
  }
  ```
```