import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddPost = () => {
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState();
  const [status, setStatus] = useState();
  const [postData, setPostData] = useState({
    postType: "",
    title: "",
    category: "",
    price: "",
    content: "",
    Address: "",
    zipCode: "",
    city: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value
      
    });

    
  };

  const handleSelectFile = (event) => setImage(event.target.files[0]);
  console.log(image);

  const handleSubmit = async (event) => {
    // console.log(event.target.parentElement.parentElement)
    // const form = event.target.parentElement.parentElement;
    event.preventDefault();
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    
    console.log('ammar')

    let form = new FormData();

    form.append("postType", postData.postType);
    form.append("title", postData.title);
    form.append("category", postData.category);
    form.append("price", postData.price);
    form.append("content", postData.content);
    (image && form.append("image", image));
    form.append("Address", postData.Address);
    form.append("zipCode", postData.zipCode);
    form.append("city", postData.city);

    form.forEach(entery => console.log(entery));

    try {
      const res = await axios
        .post("https://searchandoffer.onrender.com/api/add", form, { withCredentials: true })
        .then((response) => {
          setPostData({
            postType: "",
            title: "",
            category: "",
            price: "",
            content: "",
            Address: "",
            zipCode: "",
            city: "",
          });
         
        })
        .catch(() => {
          setResult({ success: false, message: "something is wrong" });
        });
    } catch (error) {
      console.log(error);
    }

    setValidated(true);
  };

  return (
    // <form  onSubmit={handleSubmit} className="container mt-5">
  
    // </form>
    <form onSubmit={handleSubmit} className="container mt-5">
          <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>I am </Form.Label>
          <Form.Select aria-label="Default select example" 
          onChange={handleChange}
          value={postData.postType}
           name="postType"
           >
            <option>please select here</option>
            <option value="searching">searching</option>
            <option value="offering">offering</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="text"
            value={postData.title}
            name="title"
            placeholder="title"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Category type </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            value={postData.category}
            name="category"
          >
            <option>select a category</option>
            <option value="realEstate">Real Estate</option>
            <option value="Job">Jobs</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Pets">Pets</option>
            <option value="Autos">Vehicles</option>
            <option value="Services">Services</option>
            <option value="Offers">Special offers</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              value={postData.price}
              name="price"
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-5 ">
        <Form.Label>Please specify your ad down here:</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="ad content here">
          <Form.Control
            md="4"
            onChange={handleChange}
            as="textarea"
            style={{ height: "100px" }}
            value={postData.content}
            name="content"
          />
        </FloatingLabel>
        <Form.Group
          as={Col}
          md="8"
          className="mt-3"
          controlId="validationCustomUsername"
        >
          <Form.Label>Upload Images</Form.Label>
          <InputGroup>
            <Form.Control
              type="file"
              placeholder="add image"
              aria-describedby="inputGroupPrepend"
              onChange={handleSelectFile}
             
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          className="mt-3"
          as={Col}
          md="4"
          controlId="validationCustomUsername"
        >
          <Form.Label>Address</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Your address"
              aria-describedby="inputGroupPrepend"
              value={postData.Address}
              name='Address'
            />
            <Form.Control.Feedback type="invalid">
              Please add your address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          className="mt-3"
          controlId="validationCustomUsername"
        >
          <Form.Label>Zip code</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="zip code"
              aria-describedby="inputGroupPrepend"
              required
              value={postData.zipCode}
              name='zipCode'
            />
            <Form.Control.Feedback type="invalid">
              Please add zip code.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          className="mt-3"
          controlId="validationCustomUsername"
        >
          <Form.Label>City</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="City"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
              value={postData.city}
              name='city'
            />
            <Form.Control.Feedback type="invalid">
              Please add your city.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="flex-row justify-content-end mt-5 ">
        <button
          type="submit"
          // onClick={handleSubmit}
          as={Col}
          md="2"
          className="mt-3 btn btn-primary col-md-2 "
        >
          publish
        </button>
        <Button
          type="reset"
          variant="secondary"
          as={Col}
          md="2"
          className="mt-3 btn-back"
        >
          <a className="btn-back" href="/">
            Back
          </a>{" "}
        </Button>
      </Row>
    </form>
  );
};

export default AddPost;
