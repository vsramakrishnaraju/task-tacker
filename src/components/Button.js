import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick = {props.onClick} 
                style = {{ backgroundColor: props.color}}
                className ='btn'> 
           {props.text}
        </button>
    )
}

Button.defaultProps = {
    text: 'add',
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
