import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const ProfilePicItem = ({ pic }) => {
  return (
    
    <Row>
  <Col
    m={6}
    s={12}
    className="valign center-align"
  >
    <Card
      actions={[
        <a key="1" href="/adoption-page">Adopt Me!</a>,
       
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={pic.primary_photo_cropped ? pic.primary_photo_cropped.full : "/images/img8.jpg"}></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      {/* {pic.breed} */}
    </Card>
  </Col>
</Row>
  )
};

export default ProfilePicItem;