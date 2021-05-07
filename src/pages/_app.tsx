import { Provider } from 'react-redux';
import store from '@/redux/store';
import '../styles/globals.scss';

import Layout from '@/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
