import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  Button,
  message,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Dragger } = Upload;

const CreateJobModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  const handleFinish = (values) => {
    console.log('Form Values:', values);
    message.success('Job posted successfully');
    onClose();
  };

  return (
    <Modal
      title="Post Job"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
    >
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        {/* Property Information */}
        <h3>Property Information</h3>
        <Form.Item
          name="property"
          label="Property*"
          rules={[{ required: true, message: 'Please select a property' }]}
        >
          <Select
            placeholder="Select property"
            options={[{ value: 'home1', label: 'Home 1' }]}
          />
        </Form.Item>

        {/* Basic Details */}
        <h3>Basic Details</h3>
        <Form.Item
          name="jobTitle"
          label="Job Title*"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter job title" />
        </Form.Item>

        <Form.Item
          name="jobDescription"
          label="Job Description*"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter job description" />
        </Form.Item>

        <Form.Item
          name="visitTime"
          label="Preferred Visit Date & Time*"
          rules={[{ required: true }]}
        >
          <DatePicker showTime style={{ width: '100%' }} />
        </Form.Item>

        {/* Boiler Information */}
        <h3>Boiler Information</h3>
        <Form.Item name="errorCode" label="Error Codes Displayed">
          <Input placeholder="Enter error code" />
        </Form.Item>

        <Form.Item
          name="errorFiles"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger beforeUpload={() => false} maxCount={1}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p>
              Click to Upload Error Codes Displayed
              <br />
              <small>Max. File size: 25MB</small>
            </p>
          </Dragger>
        </Form.Item>

        {/* Additional Info */}
        <h3>Additional Information</h3>
        <Form.Item name="notes" label="Additional Notes">
          <TextArea rows={3} placeholder="Write here..." />
        </Form.Item>

        {/* Attachments */}
        <h3>Attachments</h3>
        <Form.Item
          name="photo"
          label="Photo*"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
        >
          <Dragger beforeUpload={() => false} maxCount={3}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p>
              Click to Upload
              <br />
              <small>Max. File size: 25MB</small>
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item
          name="video"
          label="Video"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger beforeUpload={() => false} maxCount={2}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p>
              Click to Upload
              <br />
              <small>Max. File size: 25MB</small>
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full bg-[#0A0A0A] text-white py-3 rounded-[16px] hover:bg-white hover:text-[#0A0A0A] border border-[#0A0A0A] transition"
            htmlType="submit"
            block
          >
            Post job
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateJobModal;
