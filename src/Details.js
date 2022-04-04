import { Component } from "react";
// import { Component } from "react/cjs/react.production.min";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import ErrorBoundary from "../ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    // throw new Error("Catch me, I'm meant for you");

    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button style={{ backgroundColor: theme }}>Adopt {name}</button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const { id } = useParams();
  return (
    <ErrorBoundary>
      <Details id={id} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
