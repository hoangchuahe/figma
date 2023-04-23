import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  Radio,
} from 'antd'
import { useState } from 'react'
import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select
const normFile = (e) => {
  console.log('Upload event:', e)
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const EditDoctor = () => {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name='firstname'
        label='First Name'
        rules={[
          {
            required: true,
            message: 'Please input your First name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='lastname' label='Last Name'>
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'name']}
        label='Username'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label='DatePicker'>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name='gender'
        label='Gender'
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder='select your gender'>
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
          <Option value='other'>Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name='address' label='Address'>
        <Input />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='Avatar' valuePropName='fileList' getValueFromEvent={normFile}>
        <Upload action='/upload.do' listType='picture-card'>
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Avatar
            </div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item name='bio' label='Short Biography' rules={[{ required: true, message: 'Please input bio' }]}>
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item name='status' label='Status'>
        <Radio.Group>
          <Radio value='active'>Active</Radio>
          <Radio value='inactive'>Inactive</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default EditDoctor
