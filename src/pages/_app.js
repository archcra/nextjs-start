import { Provider } from 'react-redux';
import store from '@/redux/store';
require('@/styles/global.less');
import Layout from '@/layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;