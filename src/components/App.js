import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

/*
1. COMPONENT RENDERS ITSELF ONE TIME WITH NO LIST OF IMAGES, STATE IS INITIALIZED WITH AN EMPTY ARRAY, SINCE THAT IS WHAT THE API WILL RETURN.
2. onSearchSubmit METHOD CALLED - ARROW FUNCTION STOPS FROM BECOMING UNDEFINED (async & await DEALS WITH PROMISES DURING A DATA DIG)
3. REQUEST MADE TO UNSPLASH
--- WAIT ---
4. REQUEST COMPLETE
5. SET IMAGE DATA ON 'STATE' OF APP COMPONENT
6. APP COMPONENT RERENDERS AND SHOWS IMAGES
*/