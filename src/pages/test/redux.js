import { connect } from 'react-redux'
import { Button, Divider } from 'antd';
import { themeActionTypes } from '@/redux/theme/action';
import Link from 'next/link';

const Index = ({ theme, dispatch }) => {
    const change2Dark = () => {
        dispatch({
            type: themeActionTypes.CHANGE_THEME,
            value: 'dark'
        });
    }
    const change2Light = () => {
        dispatch({
            type: themeActionTypes.CHANGE_THEME,
            value: 'light'
        });
    }

    return (
        <>
            <span> Now theme is: {theme.value} </span>
            <Button onClick={change2Dark}> set dark</Button>
            <Button onClick={change2Light}> set light</Button>

            <Divider plain></Divider>

            <Button type="link" href="/"> Home </Button>
            <Divider plain type="vertical"></Divider>

            <Link href="/" prefetch={false}>
            Home too, another short way? 
          </Link>
        </>
    )
}

export default connect((state) => state)(Index)
