/* The HornedBeast class is a React component that displays an image and information about an animal, allows the user to vote for it, and has a button to expand the information. */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    // Create initial state: tied to the animals JSON fille
    this.state = {
      clicks: 0,
    }
  }

  vote = () => {
    let clicks = this.state.clicks + 1;
    this.setState({ clicks });
  }

  render() {
    return (
      // <>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            // onClick={this.vote}
            variant="top"
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}
            </Card.Title>
            <Card.Text>{this.props.description}
            </Card.Text>
            <div>
              <Button
                onClick={this.props.handleSelectBeast}>
                Expand
              </Button>
           
              <Button
                onClick={this.vote}>
                VOTE
              </Button>

            </div>
            <section> ❤️ {this.state.clicks}
            </section>
          </Card.Body>
        </Card>
      // </>
    )
  }
}
export default HornedBeast;