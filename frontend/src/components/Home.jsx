/* eslint-disable */
import avatar from '../assets/avatar.jpg';
import Button from 'react-bootstrap/Button';

const Home = () => (
    <>
        <div className="logo">
            <img src={avatar} alt="" />
        </div>
        <h1> Home </h1>
        <Button
            variant="primary"
        >
            Primary
        </Button>{' '}
    </>
)

export default Home;
