import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {toastError}  from '../lib/toastError';
import {Link} from 'react-router-dom'
import { BsMap } from 'react-icons/bs';
import { MDBIcon} from 'mdbreact';

const Jobs =() =>{
    const [allPost, setAllPosts] = useState();

    useEffect(() => {
        (async () => {
          try {
         
            const { data } = await axios('https://searchandoffer.onrender.com/api');
            console.log(data);
            setAllPosts(data);
            
          } catch (error) {
            toastError(
              error.message || 'No posts,  Sorry..!'
            );
            
          }
        })();
      }, []);

      return(
        <>
        {(!allPost ? <div>downloading</div> 
        
        : allPost.map((post) =>{

          if (post.category === 'Electronics')   return (
            <div className='container mt-5
            ' key={post._id}>
            <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
            <Card style={{ width: '65rem' }} key={post._id}>
            <h4>
                <Badge bg="secondary"> {post.category}</Badge>
              </h4>
              <Card.Title>{post.title} </Card.Title>
              <Card.Img variant="top" className='w-100' src={post.image} />
              <Card.Body>
             
              
              
             
                
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Card.Text>
                  {post.price}
                </Card.Text>
                <Card.Text> <MDBIcon MDBIcon fas icon="map-marker-alt"  className='icon' />  {post.Address}  {post.zipCode}  {post.city}  </Card.Text>
                <Card.Text>
                {new Date(post.updatedAt).toLocaleString(undefined, {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
                </Card.Text>
                
                <Link to={`/message/${post._id}`}><MDBIcon fas icon="envelope" className='icon' title="send a message"/></Link>
              </Card.Body>
            </Card>



            </div>
            <div className='col-sm-2'></div>


            </div>
           
          </div>
      
            )




        }) )}
        
        
        </>
    )


}

export default Jobs;