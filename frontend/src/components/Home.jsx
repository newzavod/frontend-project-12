/* eslint-disable */
import avatar from '../assets/avatar.jpg';
import Button from 'react-bootstrap/Button';
import Header from './Header';

const Home = () => (
    <>
        <div className="d-flex flex-column h-100">
            <Header />
            <div className="logo">
                <img src={avatar} alt="" />
            </div>
            <div lassName="container h-100 my-4 overflow-hidden rounded shadow">
                <div className="row h-100 bg-white flex-row">
                    <h2> Channels</h2>
                    <h2> Messages</h2>
                </div>
            </div>
            <Button
                variant="primary"
            >
                Primary
            </Button>{' '}
        </div>
    </>
)

export default Home;
