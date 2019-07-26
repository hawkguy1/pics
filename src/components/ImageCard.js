import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

/* 
1. LET THE ImageCard RENDER ITSELF AND ITS IMAGE
2. REACH INTO THE DOM AND FIGURE OUT THE HEIGHT OF THE IMAGE
3. SET THE IMAGE HEIGHT ON 'STATE' TO GET THE COMPONENT TO RERENDER
4. WHEN RERENDERING, ASSIGN A grid-row-end TO MAKE SURE THE IMAGE TAKES UP THE APPROPRIATE SPACE

REACT REFS
1. GIVES ACCESS TO A SINGLE DOM ELEMENT
2. WE CREATE REFS IN THE CONSTRUCTOR, ASSIGN THEM TO INSTANCE VARIABLES, THEN PASS TO A PARTICULAR JSX ELEMENT AS PROPS
*/