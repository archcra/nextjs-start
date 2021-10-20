import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import darkVars from '../config/dark.json';
import lightVars from '../config/light.json';
// import { CHANGE_LOADING } from '@/redux/actions/typeKeys';
import { connect } from 'react-redux'

import Header from './Header';

const Layout = (props) => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    window['less'] = {
      async: true,
      env: 'production'
    };

    const script = document.createElement('script');

    script.addEventListener('load', () => {
      window['less']
        .modifyVars(theme.value === 'light' ? lightVars : darkVars)
        .then(() => {
          /*
          dispatch({
            type: CHANGE_LOADING,
            loading: false
          });*/
        })
        .catch((error) => {
          console.error(error);
        });
    });
    script.src = '/less.min.js';
    document.body.appendChild(script);

    const css = document.createElement('link');
    css.href = '/color.less';
    // css.href = '/css/style1.less';
    css.rel = 'stylesheet/less';
    css.type = 'text/css';
    document.body.appendChild(css);

  }, []);


  return (
    <>
      <Spin
        tip="处理中，请稍后...11"
        // spinning={config.loading}
        spinning={false}
        size="large"
        wrapperClassName="global-loading"
      >

        <Header />
        {props.children}
      </Spin>
    </>
  );
};

// export default Layout;
export default connect((state) => state)(Layout)
