import Head from 'next/head';
import { Card, Col, Row, Select, Space, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { themeActionTypes } from '@/redux/theme/action';
import darkVars from '../config/dark.json';
import lightVars from '../config/light.json';
import { connect } from 'react-redux'

const Option = Select.Option;

import AlertPreview from '../components/antd-preview/Alert';
import FormPreview from '@/components/antd-preview/Form';
import TablePreview from '../components/antd-preview/Table';
import TagPreview from '@/components/antd-preview/Tag';
import UploadPreview from '../components/antd-preview/Upload';

function Home({theme}) {
  const dispatch = useDispatch();
  // const theme = useSelector((state) => state.theme);

  console.log('theme in page: ', theme)
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
                defaultValue={theme.value}
                value={theme.value}
                onSelect={(value) => {
                  const vars = value === 'light' ? lightVars : darkVars;
                  console.log('new value: ', value)

                  dispatch({
                    type: themeActionTypes.CHANGE_THEME,
                    name: value,
                    value: value
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

export default connect((state) => state)(Home)
