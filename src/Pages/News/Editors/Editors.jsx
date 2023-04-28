import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import { useLoaderData } from 'react-router-dom';
import moment from 'moment';
const Editors = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, author, total_view, rating ,category_id} = news
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">

            <Col >
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        <p className='mb-0'>{author.name}</p>
                    <p className='mt-0'><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
           
        </Row>
    );
};

export default Editors;