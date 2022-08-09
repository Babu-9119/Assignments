import React from "react";

class ControlledForm extends React.Component {
    state = {
        value : ""
    }

    handleChange = (event) => {
        this.setState({value:event.target.value})
    }

    handleSubmit = () => {
        alert("name of employee "+ this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Employee Datails</h1>
                <label>
                   Name : <input type="text" value = {this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                   Email : <input />
                </label>
                <br />
                <label>
                   Date Of Birth : <input />
                </label>
                <br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default ControlledForm;