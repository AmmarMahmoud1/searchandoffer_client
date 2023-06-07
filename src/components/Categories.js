import {Link} from 'react-router-dom'

const Categories = () => {


    return (
        <div className="container catrgories" >
            <div className='row'>
            <h3 className="text-center text-slide">
                  Looking for something specific or have something amazing to offer? You've come to the right place. Our website is all about connecting people and helping them find exactly what they need.
                </h3>
                <h1 className='text-center mt-5 mb-6'> Categories </h1>
                <h3 className='text-center mb-6'> Whether you're searching for a particular item, service, 
                 our platform empowers you to share your needs or offerings with a wide audience. </h3>
                 <h6 className='text-center '>See our classified ads down here</h6>
            </div>
            <div className="row px-3">
                <div className="col-sm-3">
                <Link className='category-link' title=' See Real Estate Ads' to='/realestate'>
                      <img src={require('../images/rsz_home.jpg')} className='category-img' />
                      
                    </Link>
                    <h6 className='text-center'> Real Estate </h6>
                    
                </div>
                <div className="col-sm-3">
                <Link className='category-link' title=' See Furniture last Ads' to='/furniture'>
                      <img src={require('../images/furniture new.png')} className='category-img' />
                    </Link>
                    <h6 className='text-center'>Furniture  </h6>
                </div>
                <div className="col-sm-3">
                <Link className='category-link' to='/jobs'>
                      <img src={require('../images/jobs.png')} className='category-img' />
                    </Link>
                    <h6 className='text-center img-desc'>  Jobs </h6>
                    
                </div>
                <div className="col-sm-3">
                <Link className='category-link' title=' See last Electronics Ads ' to='/electronics'>
                      <img src={require('../images/rsz_it_new.jpg')} className='category-img' />
                    </Link>
                    <h6 className='text-center'> Electronics  </h6>
                </div>
            </div>
            <div className="row mt-5 px-3">
                <div className="col-sm-3">
                    <Link className='category-link' title="Adapt me, I am a good friend !" to='/pets'>
                      <img src={require('../images/animals.png')} className='category-img' />
                    </Link>
                    <h6 className='text-center'>Adapt me, I am a good friend!</h6>
                
                </div>
                <div className="col-sm-3">
                <Link className='category-link' to='/services'>
                      <img src={require('../images/rsz_services.jpg')} className='category-img' />
                    </Link>
                    <h6 className='text-center img-desc'>  e.g. Designing, daily workers, etc..  </h6>
                </div>
                <div className="col-sm-3">
                <Link className='category-link' to='/autos'>
                      <img src={require('../images/Autos.png')} className='category-img' />
                    </Link>
                    <h6 className='text-center img-desc'> Vehicles </h6>
                </div>
                <div className="col-sm-3">
                <Link className='category-link' to='/offers'>
                      <img src={require('../images/rsz_home.jpg')} className='category-img' />
                    </Link>
                    <h6 className='text-center img-desc'> Special Offers</h6>
                </div>
            </div>
        </div>
    )
}

export default Categories;