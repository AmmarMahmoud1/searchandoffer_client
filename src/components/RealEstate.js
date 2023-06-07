import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {Route, Routes, Link} from 'react-router-dom'
import { MDBIcon} from 'mdbreact';
const RealEstate =({allPost}) =>{


  

  

  return(
    <>
    {(!allPost ? <div>downloading</div> 
    
    : allPost.map((post) =>{

      if (post.category === 'realEstate')   return (
        <div className='container mt-5 mb-5
        ' key={post._id}>
        <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
        <Card style={{ width: '65rem' }} key={post._id}>
        <h4>
            <Badge bg="secondary"> Real Estate</Badge>
          </h4>
          <Card.Title>{post.title} </Card.Title>
          {post.image && <Card.Img variant="top" className="w-100 img-card" src={post.image} />}
          {!post.image && <img className="image-placeholder" src={require('../images/Search & Offer-logos_black.png')} />}
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

export default RealEstate;