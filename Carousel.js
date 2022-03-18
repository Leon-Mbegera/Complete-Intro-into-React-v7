import React from "react";

class Carousel extends React.Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick(event) {
    this.setState({
      active: event.target.dataset.index,
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={(e) => e.target.dataset.index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
