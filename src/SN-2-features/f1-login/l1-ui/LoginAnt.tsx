import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {Button, Input, Row, Space} from 'antd';
import Col from 'antd/lib/col';
import React, {ChangeEvent} from 'react';


const LoginAnt = () => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    return <div style={{margin: '0 auto'}}>
        <Row>
            <Col span={10}> <Input placeholder="input with clear icon" allowClear onChange={onChange}/></Col>
        </Row>
        <Row>
            <Col span={10}> <Space direction="vertical" style={{width: '100%'}}>
                <Input.Password

                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
            </Space>
            </Col>
        </Row>
        <Row>
            <Col span={12}><Button>Submit</Button></Col>
        </Row>
    </div>
};
export default LoginAnt