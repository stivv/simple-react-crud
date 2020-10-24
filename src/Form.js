import React from 'react'

class Form extends React.Component {

    initialState = { name: '', job: ''}

    state = this.initialState

    handleInput = (event) => {
        const {name,value} = event.target

        this.setState({
            [name]: value
        })
    }
    componentDidUpdate(){
        this.setState(this.props.xter)
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <form>
                <input name="name" value={this.state.name} placeholder="name" onChange={this.handleInput} />
                <input name="job" value={this.state.job} placeholder="job" onChange={this.handleInput} />
                <input type="button" value="save" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form