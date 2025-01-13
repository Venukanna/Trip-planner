import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [guest, setGuest] = useState("");

  // Handler for location selection
  const selectedLocation = (value) => {
    console.log("Location:", value);
    setLocation(value);
  };

  // Handler for guest selection
  const selectedGuest = (value) => {
    console.log("Guest:", value);
    setGuest(value);
  };

  // Handler for search button click
  const handleSearch = () => {
    console.log("Search Parameters:");
    console.log("Location:", location);
    console.log("Check-in Date:", startDate);
    console.log("Check-out Date:", endDate);
    console.log("Guest:", guest);

    // Add your search logic here (e.g., call an API)
    // Example:
    // fetch(`/api/search?location=${location}&startDate=${startDate}&endDate=${endDate}&guest=${guest}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  {/* Location Dropdown */}
                  <CustomDropdown
                    label="Location"
                    onSelect={selectedLocation}
                    options={[
                      "USA, Turkish",
                      "Tokyo, Japan",
                      "Sydney, Australia",
                      "Melbourne, Australia",
                      "Paris, France",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  {/* Guest Dropdown */}
                  <CustomDropdown
                    label="Guest"
                    onSelect={selectedGuest}
                    options={[
                      "2 adults, 1 children",
                      "2 adults, 1 children",
                      "2 adults, 3 children",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                  {/* Search Button */}
                  <Button
                    className="primaryBtn flex-even d-flex justify-content-center"
                    onClick={handleSearch} // Added onClick handler
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;