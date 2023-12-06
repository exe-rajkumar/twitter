import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("https://2vw931uu3l.execute-api.ap-south-1.amazonaws.com/twitter_profile_picture", formData, {
        params: {
          filename: selectedFile.name,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Form>
    </div>
  );
};

export default UploadImage;
