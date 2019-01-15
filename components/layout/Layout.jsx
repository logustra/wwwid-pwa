import React, {Component} from 'react'
import Head from '../head/Head'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';

import GlobalStyle from '../../styles/Main'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Head title={this.props.title} description={this.props.description}/>
                <GlobalStyle />
                <Navbar />
                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout
