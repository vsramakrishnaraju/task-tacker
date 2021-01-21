import PropTypes from 'prop-types';
import Button from './Button';

// const Header = (props) => {
const Header = ({title}) => {

    const onClick = () => {
        console.log("click")
    }

    return (
       <header className='header'> 
           {/* <h1> {props.title} </h1> */}
           <h1> {title} </h1>
           <Button text= 'add' onClick={onClick}/>
       </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle ={
//     color: 'red'
// }


export default Header
