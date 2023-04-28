import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4 ">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1  '>
                    <p className='mb-0'>{author.name}</p>
                    <p className='mt-0'><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 220 ? <>{details}</> : <>{details.slice(0, 220)}...
                        <br></br><Link className='text-decoration-none text-warning font-weight-bold' to={`/news/${_id}`}>Read More...</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1' >
                    <Rating className='mr-5'
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar> }
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ml-5'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;