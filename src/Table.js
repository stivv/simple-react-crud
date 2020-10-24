import React from 'react'
import Form from './Form'

class Table extends React.Component {
    render() {
        const {xters, removeXter, editXter} = this.props
        const row = xters.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                {/* <td><a href="#" onClick={() => editXter(index)}>edit</a></td> */}
                <td><a href="#" onClick={() => removeXter(index)}>X</a></td>
            </tr>
        })
        return (
            <div>
                <table>
                    <tbody>
                        {row}
                    </tbody>
                </table>
                <br/><br/>
                <Form handleSubmit={this.props.handleSubmit} xter={this.props.xter} />
            </div>
        )
    }
}

export default Table