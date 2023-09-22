import React, { useEffect, useRef } from 'react';
import { Row, Button, Form, Input, InputNumber, DatePicker, Select, Col, FormInstance } from 'antd';
import dayjs from 'dayjs';

const TestUser = { 
  cabin: '1',
	nameFirst: "Gerard",
	nameLast: "Zhang",
	birth: '1990-10-01',
	age: 35,
	gender: 'male',
	racial: 'yellow',
	mentalHealthProvider: '',
	substanceUseDisorderProvider: '',
	caseManagementStatus: '',
	need: "need plenty of fooooooooooooood",
	plan: "fly away",
	phone: '',
	organization: ['Community Action Agencies','Pet food'],
	comments: 'talk less, do more',
  createDate: '2023-10-01'
}

export interface CaseDomin {
	cabin: number,
	nameFirst: string,
	nameLast: string,
	birth: string,
	age: number,
	gender: string,
	racial: string,
	mentalHealthProvider: string,
	substanceUseDisorderProvider: string,
	caseManagementStatus: string,
	need: string,
	plan: string,
	phone: string,
	organization: string[],
	comments: string,
  createDate: string
}

const { TextArea } = Input;

const CaseDetail = () => {
  const formRef = useRef<any>(null)
  useEffect(() => {
    formRef.current.setFieldsValue({
      ...TestUser,
      birth: dayjs(TestUser.birth),
      createDate: dayjs(TestUser.createDate) 
    })
  }, [])

  const onFinish = (values: CaseDomin) => { 
    console.log('Success:', values); 
    const createDate = dayjs(values.createDate).format('DD/MM/YYYY')

  };

  const handleNameChange = (data: any) => {
    console.log('name:', data.target.value);
  }

  const cancelAction = (data: any) => {
    console.log('name:', data.target.value);
}

  const style = {
    display: 'flex',
    marginTop: '200px',
    justifyContent: 'center'
  }

  return (
    <div style={style}>
      <Form
        ref={formRef}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          top:100,
          maxWidth: 1500,
          flex: 1
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Cabin"
              name="cabin"
              rules={[
                {
                  required: true,
                  message: 'Please input Cabin!',
                },
              ]}
            >
              <Input onChange={handleNameChange} />
            </Form.Item>

            <Form.Item
              label="Name First"
              name="nameFirst"
              rules={[
                {
                  required: true,
                  message: 'Please input Name First!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Name Last"
              name="nameLast"
              rules={[
                {
                  required: true,
                  message: 'Please input Name Last!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Birth"
              name="birth"
            >
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
            >
              <InputNumber disabled/>
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
            >
              <Select
              style={{ width: 120 }}
              options={[
                { value: 1, label: 'female' },
                { value: 2, label: 'male' },
                { value: 3, label: 'others' },
                ]}/>
            </Form.Item>


            <Form.Item
              label="Racial"
              name="racial"
            >
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 1, label: 'black' },
                  { value: 2, label: 'white' },
                  { value: 3, label: 'yellow' },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Mental Health Provider"
              name="mentalHealthProvider"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Substance Health Provider"
              name="substanceUseDisorderProvider"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Case Management Status"
              name="caseManagementStatus"
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              label="Need"
              name="need"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Plan"
              name="plan"
            >
              <Input />
            </Form.Item>

            
            <Form.Item
              label="Phone"
              name="phone"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Organization"
              name="organization"
            >
              <Select
                mode="multiple"
                options={[
                  { value: 'Community Action Agencies', label: 'Community Action Agencies'},
                  { value: 'Health Centers', label: 'Health Centers' },
                  { value: 'Mental Health Centers', label: 'Mental Health Centers' },
                  { value: 'Substance Abuse/Addiction Treatment Organisations', label: 'Substance Abuse/Addiction Treatment Organisations' },
                  { value: 'Marigold - online anonymous peer support', label: 'Marigold - online anonymous peer support' },
                  { value: 'NET Centers', label: 'NET Centers' },
                  { value: 'Veterinary care', label: 'Veterinary care' },
                  { value: 'Pet food', label: 'Pet food' },
                  { value: 'Creadit Unions', label: 'Creadit Unions' },
                  { value: 'Joyfully Connected Foundation', label: 'Joyfully Connected Foundation' },
                  { value: 'Georgetown Police', label: 'Georgetown Police' },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Comments"
              name="comments"
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 161,
              }}
            >
              <Button type="default" htmlType="submit" style={{marginLeft:'100px', marginTop:'20px'}}>
                confirm
              </Button>

              <Button type="default" onClick={cancelAction} style={{marginLeft:'100px'}}>
                cancel 
              </Button>
            
            </Form.Item>
          
          </Col>
        </Row>
      </Form>
    </div>
  )
};
export default CaseDetail;