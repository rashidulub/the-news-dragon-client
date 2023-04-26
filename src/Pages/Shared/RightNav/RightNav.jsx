import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook, FaTwitter,FaInstagram ,FaDiscord} from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3 ' >Login With </h4>
            <Button className='mb-2 ' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub />Login with Github</Button>
            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    < ListGroup.Item><FaFacebook />  facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>  Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaDiscord/>  Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='mt-4 text-center'>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;            