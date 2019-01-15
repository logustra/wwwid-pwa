import React, {Component} from 'react'

class Blog extends Component {
    static async getInitialProps(context) {
        const data = {
            id: context.query.post
        }

        return { data }
    }

    render() {
        return (
            <div>{ this.props.data.id }</div>
        )
    }
}

export default Blog
