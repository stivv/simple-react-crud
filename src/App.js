import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
	state = {
		xters: [
			{name: 'test 1', job: 'job 1'},
			{name: 'test 2', job: 'job 2'},
			{name: 'test 3', job: 'job 3'},
			{name: 'test 4', job: 'job 4'},
		],
		xter: {}
	}

	editXter = (index) => {
		this.setState({
			xter: this.state.xters.filter((item, i) => i === index)
		})
	}

	removeXter = (index) => {
		this.setState({
			xters: this.state.xters.filter((item, i) => i !== index)
		})
	}

	handleSubmit = (xter) => {
		this.setState({
			xters: [...this.state.xters, xter]
		})
	}

	render() {
		const { xters, xter } = this.state
		return(
			<div>
				<Table 
					xter={xter} 
					xters={xters} 
					editXter={this.editXter}
					removeXter={this.removeXter} 
					handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App