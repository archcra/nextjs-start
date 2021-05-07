import { useState } from 'react';
import { AppstoreOutlined, DropboxOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './index.module.scss';

const Header = () => {
  const [current, setCurrent] = useState('demo');

  const headerClass = classnames('main-container', styles.header);

  return (
    <header className={headerClass}>
      <Menu
        onClick={(e: any) => {
          setCurrent(e.key);
        }}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="demo" icon={<DropboxOutlined />}>
          <Link href="/" prefetch={false}>
            演示
          </Link>
        </Menu.Item>
        <Menu.Item key="404" icon={<DropboxOutlined />}>
          <Link href="/hahah" prefetch={false}>
            404
          </Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          <Link href="/about" prefetch={false}>
            关于
          </Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;
