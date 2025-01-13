

// import React from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

// const Profile = () => {
//   return (
//     <>
//       <Breadcrumbs title="Profile" pagename="Profile" />
//       <section className="py-5">
//         <Container>
//           <Row>
//             <Col md="4">
//               <Card className="border-0 shadow-sm rounded-3 mb-4">
//                 <Card.Body className="text-center">
//                   <div className="d-flex justify-content-center align-item-search my-2">
//                     <div className="bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-3 mb-2 ">
//                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WDEc8Qf0-6p1_VyDuja3DhXKU9qnOdqbpw&s" alt="User Picture" className="img-fluid rounded-circle" />
//                     </div>
//                   </div>
//                   <Card.Title className="fw-bold h5">PsPk</Card.Title>
//                   <ListGroup>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-envelope me-1"></i> Email: user@example.com
//                     </ListGroup.Item>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-phone me-1"></i> Phone: 1234567890
//                     </ListGroup.Item>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-map me-1"></i> Address: 123 Main St, Anytown, USA
//                     </ListGroup.Item>
//                   </ListGroup>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md="8">
//               <Card className="border-0 shadow-sm rounded-3 mb-4">
//                 <Card.Body>
//                   <h2 className="h4 font-bold mb-4">Account Settings</h2>
//                   <ListGroup>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-lock me-1"></i> Change Password
//                     </ListGroup.Item>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-person me-1"></i> Edit Profile
//                     </ListGroup.Item>
//                     <ListGroup.Item className="border-0">
//                       <i className="bi bi-box-arrow-right me-1"></i> Logout
//                     </ListGroup.Item>
//                   </ListGroup>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Profile;

import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import './Profile.css'; // Import your CSS file

const Profile = () => {
  return (
    <>
      <Breadcrumbs title="Profile" pagename="Profile" />
      <section className="py-5">
        <Container>
          <Row>
            <Col md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="profile-image-box">
                    <img
                      src="https://images.pexels.com/photos/16354650/pexels-photo-16354650/free-photo-of-colorful-figurine-of-hindu-god.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="User  Picture"
                      className="profile-image"
                    />
                  </div>
                  <Card.Title className="fw-bold h5">venu</Card.Title>
                  <ListGroup>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-envelope me-1"></i> Email:venu@gmail.com
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-phone me-1"></i> Phone: 9963662332
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-map me-1"></i> Address: Hyd, cyber Towers
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md="8">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body>
                  <h2 className="h4 font-bold mb-4">Account Settings</h2>
                  <ListGroup>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-lock me-1"></i> Change Password
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-person me-1"></i> Edit Profile
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-box-arrow-right me-1"></i> Logout
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

export default Profile;