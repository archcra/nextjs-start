import { connect } from 'react-redux'

const Index = ({ theme, dispatch }) => {

    console.log('props: ', theme)

    return (
        <>
            <span> Now theme is: {theme.value} </span>

        </>
    )
}

export default connect((state) => state)(Index)
