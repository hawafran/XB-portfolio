import React from "react";
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import VideoPlayer from 'react-video-js-player';
import Video from '../images/video.mp4';
// import Poster from '../images/poster.jpg';

function About() {
  const videoSrc = Video;

  return (

    <Row className = 'video-app black valign-center'>
      <Col
        >
      <VideoPlayer 
        src = {videoSrc}
        autoPlay={true}
        muted = {true}
        repeat={true}
        paused={false}
        width = '600'
        height = '700'
        className = 'valign-center'

      />
      </Col>
       <Col
    m={6}
    s={12}
    className = 'about-card valign center'
  >
    <Card
      className="black valign-center"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
    >
      <h2>I am Xavier Banks</h2>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut laboriosam sint accusamus commodi. Delectus laudantium magnam tempora in. Quidem quasi dolore quam quae aut nihil magni, veritatis quis ullam.</h5>
      <h1></h1>
      <h5>Find Me</h5>
      <Button
        href="mailto:bookingxbanks@gmail.com" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Email
      </Button>
      <Button
        href="https://www.instagram.com/xavierbanks__/" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
        >
        Instagram
      </Button>
      <Button
        href="https://www.hrlmchampagne.com/pages/our-story" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        HRLM
      </Button>
    </Card>
  </Col>
      
</Row>
    
    
  //   <Row>
  //   <Col
  //     m={6}
  //     s={12}
  //   >
  //     <Card
  //       actions={[
  //         <a key="1" href="#">This is a link</a>,
  //         <a key="2" href="#">This is a link</a>
  //       ]}
  //       className="blue-grey darken-1"
  //       closeIcon={<Icon>close</Icon>}
  //       revealIcon={<Icon>more_vert</Icon>}
  //       textClassName="white-text"
  //       title="Card title"
  //     >
  //       I am a very simple card.
  //     </Card>
  //   </Col>
  // </Row>
// <Row> 
  // <Col
  //   m={6}
  //   s={12}
  // >
  //   <Card
      // actions={[
      //   <a key="1" href="#">This is a link</a>,
      //   <a key="2" href="#">This is a link</a>
      // ]}
//       className="bio-card black"
//       closeIcon={<Icon>close</Icon>}
//       revealIcon={<Icon>more_vert</Icon>}
//       textClassName="white-text"
//       // title="I am Xavier Banks"
//     >
//       <h3>I am Xavier Banks</h3>
//      <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque ea porro eaque quibusdam aut obcaecati earum enim fugit aspernatur, quasi, officiis animi aliquam laboriosam repellat natus neque inventore hic?</h5>
//      <h6>Questions?</h6>
//      <Button
//         href="https://www.instagram.com/xavierbanks__/" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Instagram
//       </Button>
//       <Button
//         href="mailto:bookingxbanks@gmail.com" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Email
//       </Button>
//     </Card>
//   </Col>
// </Row>
  //   <Row>
  // <Col
  //   m={5}
  //   s={10}
  //   className="about-card"
  // >
  //    <Card className="about-image"
     
    //  closeIcon={<Icon>close</Icon>}
    //  header={<CardTitle image={Video}></CardTitle>}
    //  revealIcon={<Icon>{Img8}</Icon>}
  //  >
  //       </Card>
  // </Col>,

  // <Row>
  // <Col
  //   m={6}
  //   s={12}
  // >
  //   <Card
      // actions={[
      //   <a key="1" href="#">This is a link</a>,
      //   <a key="2" href="#">This is a link</a>
      // ]}
//       className="bio-card black"
//       closeIcon={<Icon>close</Icon>}
//       revealIcon={<Icon>more_vert</Icon>}
//       textClassName="white-text"
//       // title="I am Xavier Banks"
//     >
//       <h3>I am Xavier Banks</h3>
//      <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque ea porro eaque quibusdam aut obcaecati earum enim fugit aspernatur, quasi, officiis animi aliquam laboriosam repellat natus neque inventore hic?</h5>
//      <h6>Questions?</h6>
//      <Button
//         href="https://www.instagram.com/xavierbanks__/" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Instagram
//       </Button>
//       <Button
//         href="mailto:bookingxbanks@gmail.com" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Email
//       </Button>
//     </Card>
//   </Col>
// </Row>
// </Row>      
  );
}

export default About;