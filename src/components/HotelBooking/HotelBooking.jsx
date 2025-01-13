import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Col, Container, Form, Row, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "../HotelBooking/HotelBooking.css";

const HotelBooking = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  useEffect(() => {
    document.title = "Hotel Booking";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Hotel Booking" pagename="Hotel Booking" />
      <section className="hotel-booking-section py-5">
        <Container>
          <Row>
            <Col md="8" lg="8">
              <div className="booking-form-warp border rounded-3">
                <div className="form-title px-4 border-bottom py-3">
                  <h3 className="h4 font-bold m-0">Hotel Booking Details</h3>
                </div>

                <Form className="p-4">
                  <Row>
                    <Form.Group as={Col} md="6" controlId="fullname" className="mb-4">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control required type="text" placeholder="Enter your full name" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="email" className="mb-4">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control required type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="phone" className="mb-4">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control required type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="guests" className="mb-4">
                      <Form.Label>Number of Guests</Form.Label>
                      <Form.Control required type="number" placeholder="Enter number of guests" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="checkin" className="mb-4">
                      <Form.Label className="d-block">Check-In Date</Form.Label>
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        className="form-control w-100"
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="checkout" className="mb-4">
                      <Form.Label className="d-block">Check-Out Date</Form.Label>
                      <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        className="form-control w-100"
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </Form.Group>

                       <Col md="12" className="d-flex justify-content-between">
                                           {/* Back to Booking Button */}
                                          <button className="primaryBtn">
                                             <Link to="/booking" style={{ color: "#fff", textDecoration: "none" }}>
                                              Back to Booking
                                               </Link>
                                             </button>
                       
                      <button className="primaryBtn">Book Hotel</button>
                      
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col md="4" lg="4">
              <Card className="card-info p-0 shadow-sm bg-white">
                <Card.Header>
                  <h1 className="font-bold h4 mt-2">Price Summary</h1>
                </Card.Header>
                <Card.Body className="pb-0">
                  <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Base Price</span>
                      <strong>$150</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Taxes</span>
                      <strong>$20</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      < span>Total Price</span>
                      <strong>$170</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HotelBooking;