import Head from 'next/head';
import { Card, Col, Row, Select, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { StoreTypes } from '@/redux/reducer';
import { CHANGE_THEME } from '@/redux/actions/typeKeys';
import darkVars from '../config/dark.json';
import lightVars from '../config/light.json';

const Option = Select.Option;

import AlertPreview from '../components-biz/Alert';
import FormPreview from '@/components-biz/Form';
import TablePreview from '../components-biz/Table';
import TagPreview from '@/components-biz/Tag';
import UploadPreview from '../components-biz/Upload';

export default function Home() {
  const dispatch = useDispatch();
  const config = useSelector((state: StoreTypes) => state.config);

  return (
    <>
      <Head>
        <title>演示</title>
        <meta name="keywords" content="哦哦,嗯嗯,好的" />
        <meta name="description" content="支持切换主题的nextjs开发！" />
      </Head>

      <div className={'main-container'}>
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <Card>
              <Select
                placeholder="Please select theme"
                value={config.name}
                onSelect={(value) => {
                  const vars = value === 'light' ? lightVars : darkVars;

                  dispatch({
                    type: CHANGE_THEME,
                    name: value
                  });

                  window['less'].modifyVars(vars).catch((error) => {
                    console.error(error);
                  });
                }}
              >
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
              </Select>
            </Card>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="middle">
              <Card title="Alert">
                <AlertPreview />
              </Card>
              <Card title="Tag">
                <TagPreview />
              </Card>
              <Card title="Table">
                <TablePreview />
              </Card>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="middle">
              <Card title="Form">
                <FormPreview />
              </Card>
              <Card title="Upload">
                <UploadPreview />
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
}
