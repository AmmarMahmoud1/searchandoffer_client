import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { toastError } from '../lib/toastError';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Welcome = () => {
  const [allPost, setAllPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('http://localhost:8080/api');
        setAllPosts(data);
      } catch (error) {
        toastError(error.message || 'No posts,  Sorry..!');
      }
    })();
  }, []);

  const offerStyle = {
    border_box: '#972618 solid dotted ',
    box_shadow: '#3D4069',
  };

  const searchStyle = {
    border: '#3D4069',
    box_shadow: '#972618',
  };

  return (
    <div className="container-fluid welcome mt-5">
      <h3 className="text-center">Start exploring, sharing, and connecting now. The possibilities are endless!</h3>
      
      <div className="row welcome">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 mt-5 pt-6">
          <OwlCarousel className="owl-theme" loop margin={10} nav autoplay autoplayTimeout={3000} responsive={{
            0: {
              items: 1.2
            },
            576: {
              items: 1.2
            },
            768: {
              items: 1.2
            },
            992: {
              items: 3
            }}}>
            {!allPost ? (
              <div>Ads downloading</div>
            ) : (
              allPost.map((post) => (
                <div className="item container">
                  <Card style={{ width: '25rem' }} key={post._id} className="welcome-item">
                    <h4>
                      {post.category === 'realEstate' && <Badge bg="secondary"> Real Estate</Badge>}
                      {post.category !== 'realEstate' && <Badge bg="secondary"> {post.category}</Badge>}
                    </h4>
                    <Card.Title>
                      {post.title} {post.zipCode}
                    </Card.Title>
                    {post.image && <Card.Img variant="top" className="w-100 img-card" src={post.image} />}
                    {!post.image && <img className="image-placeholder" src={require('../images/Search & Offer-logos_black.png')} />}
                    <Card.Body>
                      <Card.Title>
                        <i className="bi bi-geo-alt">{post.Address}</i>
                      </Card.Title>
                      <Card.Text className="content">{post.content}</Card.Text>
                      <Card.Text>
                {new Date(post.updatedAt).toLocaleString(undefined, {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
                </Card.Text>
                      <Card.Text>{post.price}</Card.Text>
                      <Link to={`/message/${post._id}`}>message</Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            )}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
