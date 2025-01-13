import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Col, Container, Form, Row, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "../TrainBooking/TrainBooking.css";




const TrainBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    document.title = "Train Booking";
    window.scroll(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Breadcrumbs title="Train Booking" pagename="Train Booking" />
      <section className="trainbooking-section py-5">
        <Container>
          <Row>
            <Col md="8" lg="8">
              <div className="trainbooking-form-warp border rounded-3">
                <div className="form-title px-4 border-bottom py-3">
                  <h3 className="h4 font-bold m-0">Your Details</h3>
                </div>

                <Form onSubmit={handleSubmit} className="p-4">
                  <Row>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="firstname"
                      className="mb-4"
                    >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="First name"
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="lastname"
                      className="mb-4"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Last name"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="email.ControlInput1"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="phone"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="from"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>From</Form.Label>
                      <Form.Control
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="From"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="to"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="To"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="checkin"
                      as={Col}
                      md="6"
                    >
                      <Form.Label className="d-block">Departure Date</Form.Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="form-control w-100"
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="checkout"
                      as={Col}
                      md="6"
                    >
                      <Form.Label className="d-block">Return Date</Form.Label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={endDate}
                        endDate={startDate}
                        dateFormat="dd, MMMM, yyyy"
                   className="form-control w-100"
                      />
                    </Form.Group>

                    <Col md="12" className="text-end">
                      
                    <Col md="12" className="d-flex justify-content-between">
                    {/* Back to Booking Button */}
                   <button className="primaryBtn">
                      <Link to="/booking" style={{ color: "#fff", textDecoration: "none" }}>
                       Back to Booking
                        </Link>
                      </button>

                         {/* Book Train Button */}
                        <button type="submit" className="btn btn-primary">
                       Book Train
                     </button>
                   </Col>
                      
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TrainBooking;