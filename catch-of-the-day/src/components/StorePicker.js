import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                {/*All JSX must be returned within one element */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store →</button>
                {/* JSX comments must be placed as block comments in curly brackets */}
            </form>
        )
    }
}

export default StorePicker;  