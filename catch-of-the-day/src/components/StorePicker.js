import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();

    //If you need to access 'this' inide of a custom method you must use the syntax below or declare as above in a constructor.
    goToStore = event => {
        // 1 . Stop the form from submitting
        event.preventDefault()
        // 2. Get the text from that input (in this case using a ref)
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/inputtext
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/*All JSX must be returned within one element */}
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
                {/* JSX comments must be placed as block comments in curly brackets */}
            </form>
        )
    }
}

export default StorePicker;