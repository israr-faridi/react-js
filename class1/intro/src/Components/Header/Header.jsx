




import Button from '../common/Button/Button';
import Heading from '../common/Heading/Heading';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Heading title="Heading"/>
            <Button title='login' path='./asset/images/subscribe.jpg' />
        </div>
    )
}

export default Header;