import React, { Component } from 'react'
import Link from 'next/link'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Homepage</h3>
                <p>Sample next.js + next-routes SSRs</p>
                <Link href='/blog?post=1'>
                    <a>Blog</a>
                </Link>
            </div>
        )
    }
}

export default Home
