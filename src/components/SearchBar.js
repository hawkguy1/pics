import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>IMAGE SEARCH</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

    /* FLOW
    1. USER TYPES IN INPUT
    2. CALLBACK GETS INVOKED (onChange)
    3. WE CALL setState WITH THE NEW VALUE (WHATEVER IS TYPED)
    4. COMPONENT RERENDERS
    5. INPUT IS TOLD WHAT ITS VALUE IS (COMING FROM UPDATED 'STATE')
    
    value=WHATEVER IS TYPED INTO THE INPUT BOX, SO WE STARTED THE INPUT BOX WITH AN EMPTY STRING WHEN WE INITIALIZED 'STATE'
   */

// onClick - USER CLICKS ON SOMETHING
// onChange - USER CHANGES TEXT IN AN INPUT
// onSubmit - USER SUBMITS A FORM
// onFormSubmit - WE USED THAT TO PREVENT THE PAGE FROM REFRESHING EVERYTIME WE HIT ENTER

// CONTROLLED VS UNCONTROLLED. WHEN A COMPONENT IS CONTROLLED, THE DATA IS BEING STORED IN THE REACT COMPONENT, NOT THE HTML DOM