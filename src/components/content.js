import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

class Content extends React.Component {

  render() {
    return (
      <div className="Text">
        <br></br>
        <h1>Rugby Players Hub</h1>
        <br></br>
        <br></br>
        <h3>Click Image to direct you to Players Wiki Page</h3>

        <Carousel>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Brian_O%27Driscoll"><img
              src="http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/7/2013/11/Brian-ODriscoll.jpg"
              alt="First pic"
              height="400"
              width="900"
            />
            </a>

          </Carousel.Item>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Dan_Carter">
              <img
                src="https://cdn.newsapi.com.au/image/v1/c5d4b383d8b7e8271fd30ccbcb18588b"
                alt="Second pic"
                height="400"
                width="900"
              /></a>

          </Carousel.Item>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Faf_de_Klerk">
              <img
                src="https://i.pinimg.com/originals/6b/45/1f/6b451f591727c162857f5011fb92a87c.jpg"
                alt="Third pic"
                height="400"
                width="900"
              /></a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Sonny_Bill_Williams">
              <img
                src="https://cdn.cnn.com/cnnnext/dam/assets/191115150239-sonny-bill-williams-exlarge-169.jpg"
                alt="Third pic"
                height="400"
                width="900"
              /></a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Richie_McCaw">
              <img
                src="https://i.dailymail.co.uk/1s/2019/09/20/20/18733692-0-image-m-2_1569006564900.jpg"
                alt="Third pic"
                height="400"
                width="900"
              /></a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://en.wikipedia.org/wiki/Jonah_Lomu">
              <img
                src="https://img.maximummedia.ie/sportsjoe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtc3BvcnRzam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzExXFxcLzE4MDAzOTU0XFxcL0dldHR5SW1hZ2VzLTU2MDcxNzg4LmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5zcG9ydHNqb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9zcG9ydHNqb2VcXFwvbm8taW1hZ2UucG5nP2lkPTY1Y2QzMmUyNWM1MzA3ZjY1YWVkXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjZhNTVkY2ZiMGNhNzQ1YjJlMGZiNDViNmM3MGI3ZDg4ZjYzMTJmNWIifQ==/gettyimages-56071788.jpg"
                alt="Third pic"
                height="400"
                width="900"
              /></a>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Ru_ball.svg"
            alt="Third pic"
            height="300"
            width="300"
            
            />
        <br></br>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;