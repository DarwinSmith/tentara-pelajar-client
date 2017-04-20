import React from 'react'
import FineUploaderS3 from 'fine-uploader-wrappers/s3'
import Gallery from 'react-fine-uploader'

const profilePicUrl = ''

const uploader = new FineUploaderS3({
  options: {
    request: {
      endpoint: "https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/",
      accessKey: "AKIAIZTWQJ7BE4WN4GSQ"
    },
    validation: {
      multiple: false
    },
    signature: {
      endpoint: "http://localhost:3003/s3handler",
      version: 4
    },
    uploadSuccess: {
      endpoint: "http://localhost:3003/success"
    },
    chunking: {
      enabled: true
    },
    objectProperties: {
      region: "us-west-2"
    },
    callbacks: {
      onComplete: (id, fileName, resJSON) => {
        profilePicUrl = `https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/${resJSON.body.key}`
      }
    }
  }
})

class Upload extends React.Component {
  render () {
    <Gallery className="gallery" uploader={uploader}/>
  }
}
