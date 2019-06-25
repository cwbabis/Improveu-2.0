import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            multerImage: DefaultImg,
        }
    }
    // function to upload image once it has been captured
    uploadImage(e) {
        
        let imageFormObj = new FormData();

        imageFormObj.append("imageName", "multer-image-" + Date.now());
        imageFormObj.append("imageData", e.target.files[0]);

        // stores a readable instance of 
        // the image being uploaded using multer
        this.setState({
            multerImage: URL.createObjectURL(e.target.files[0])
        });

        axios.post("/image/uploadmulter", imageFormObj)
            .then((data) => {
                if (data.data.success) {
                    alert("Image has been successfully uploaded using multer");
                    this.setDefaultImage("multer");
                }
            })
            .catch((err) => {
                alert("Error while uploading image using multer");
                this.setDefaultImage("multer");
            });
    }

    render() {
        return (
            <div className="image-container">
                <input type="file" className="process__upload-btn" onChange={(e) => this.uploadImage(e)} />
                <img src={this.state.multerImage} alt="upload-image" className="process__image" />
            </div>
        )
    }
};

export default imageUpload;