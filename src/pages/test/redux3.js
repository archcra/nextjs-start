import { connect } from 'react-redux'
import { Button } from 'antd';
import { themeActionTypes } from '@/redux/theme/action';

const Index = ({ theme, dispatch }) => {
    const change2Dark = () => {
        dispatch({
            type: themeActionTypes.CHANGE_THEME,
            value: 'dark'
        });

        console.log('dispatched end...')
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
        </>
    )
}

export default connect((state) => state)(Index)
