import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    console.log(this.props);
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

    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const { id } = useParams();
  return <Details id={id} />;
};

export default WrappedDetails;
