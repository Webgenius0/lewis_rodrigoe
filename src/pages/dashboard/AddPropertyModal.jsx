import { Modal, Form, Input, Select, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';

const { Option } = Select;

const AddPropertyModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Form Submitted:', values);
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      className="rounded-lg"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center mb-6">
          Pricing Analysis
        </h2>

        <Form form={form} layout="vertical" onFinish={handleFinish}>
          {/* Services */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              'Additions & Remodeling',
              'Cleaning',
              'Heating',
              'Plumbing',
              'Electrical',
            ].map((service) => (
              <Button key={service} className="border w-full text-sm">
                {service}
              </Button>
            ))}
          </div>

          {/* Location Information */}
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Street Address" name="street">
              <Input />
            </Form.Item>
            <Form.Item label="Apt / Unit" name="unit">
              <Input />
            </Form.Item>
            <Form.Item label="State / Province" name="state">
              <Input />
            </Form.Item>
            <Form.Item label="City" name="city">
              <Select placeholder="Select city">
                <Option value="newyork">New York</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Postal ZIP Code" name="zip">
              <Input />
            </Form.Item>
            <Form.Item label="Country" name="country">
              <Select placeholder="Select country">
                <Option value="usa">USA</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Boiler Information */}
          <h3 className="text-base font-medium mt-6">Boiler Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Boiler Type" name="boilerType">
              <Select placeholder="Select boiler type">
                <Option value="gas">Gas</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Brand & Model" name="brandModel">
              <Input />
            </Form.Item>
            <Form.Item label="Boiler Serial Number" name="serialNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Age of Boiler" name="boilerAge">
              <Input />
            </Form.Item>
            <Form.Item label="Last Serviced Date" name="lastServiced">
              <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
            <Form.Item label="Boiler Location" name="boilerLocation">
              <Input />
            </Form.Item>
          </div>

          {/* Property Information */}
          <h3 className="text-base font-medium mt-6">Property Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Property Name" name="propertyName">
              <Input />
            </Form.Item>
            <Form.Item label="Property Type" name="propertyType">
              <Input />
            </Form.Item>
            <Form.Item label="Accessibility Info" name="accessibility">
              <Input />
            </Form.Item>
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-6">
            <Button onClick={onClose}>Back</Button>
            <Button type="primary" htmlType="submit">
              Save & Analysis
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddPropertyModal;
