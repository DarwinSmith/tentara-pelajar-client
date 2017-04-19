import React, { Component } from 'react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true
        },
        deleteFile: {
            enabled: true,
            endpoint: 'http://localhost:3002/s3handler'
        },
        request: {
            endpoint: 'http://localhost:3002/s3handler'
        },
        retry: {
            enableAuto: true
        }
    }
})

class UploadComponent extends Component {
    render() {
        return (
            <Gallery uploader={ uploader } />
        )
    }
}

export default UploadComponent
