import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/reducer';
import { Spin } from 'antd';
import darkVars from '../config/dark.json';
import lightVars from '../config/light.json';
import themeVars from '../config/theme.json';
import { CHANGE_LOADING } from '@/redux/actions/typeKeys';

import Header from './Header';

const Layout = (props: any) => {
  const dispatch = useDispatch();
  const config = useSelector((state: StoreTypes) => state.config);

  useEffect(() => {
    window['less'] = {
      async: true,
      env: 'production'
    };

    const script = document.createElement('script');

    script.addEventListener('load', () => {
      window['less']
        .modifyVars(
          config.name === 'light'
            ? { ...themeVars, ...lightVars }
            : { ...themeVars, ...darkVars }
        )
        .then(() => {
          dispatch({
            type: CHANGE_LOADING,
            loading: false
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
    script.src = '/less.min.js';
    document.body.appendChild(script);

    const css = document.createElement('link');
    css.href = '/color.less';
    css.rel = 'stylesheet/less';
    css.type = 'text/css';
    document.body.appendChild(css);
  }, []);

  return (
    <Spin
      tip="处理中，请稍后..."
      spinning={config.loading}
      size="large"
      wrapperClassName="global-loading"
    >
      {!config.loading && (
        <>
          <Header />
          {props.children}
        </>
      )}
    </Spin>
  );
};

export default Layout;
