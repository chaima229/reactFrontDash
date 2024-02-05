import React, { useState } from 'react'
import Custominput from '../components/Custominput'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


import { InboxOutlined } from '@ant-design/icons';
import { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function Addblog() {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e)
    }
  return (
      <div>
          <h3 className='mb-4 title'>Add Blog</h3>
          
          <div className=''>
              <form action=''>
                  <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                        </p>
                  </Dragger>
                  <div className='mt-4'>
                      <Custominput type="text" label="Enter Blog Title" />
                  </div>
                  
                  <select className='form-control py-3 mb-3' name='' id=''>
                      <option value="" key="">Select Blog Category</option>
                  </select>
                  <ReactQuill theme="snow" value={desc} onChange={(e) => handleDesc(e)} />
                  <button className='btn btn-success border-0 rounded-3 my-5' type='sumbit'>Add Blog</button>
              </form>
          </div>
    </div>
  )
}
