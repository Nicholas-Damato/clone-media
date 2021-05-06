import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            grow: false
        }
    }

    open = () => {
        this.setState({ grow: !this.state.grow })
        console.log('testing')
    }


    render() {
        return (
            <div>
                < div className={`nav-bar ${this.state.grow ? 'grow' : ''}`
                }>
                    <h1 className='header-text'> Start BootStrap </h1>
                    <ul className='list'>
                        <li className='spacing'>STUFF</li>
                        <li className='spacing'>GOES</li>
                        <li className='spacing'>HERE</li>
                        <li className='spacing'>FOR</li>
                        <li className='spacing'>LINKS</li>
                    </ul>
                    <button onClick={() => this.open()} className={`display button-style`}> Menu </button>
                </div >
                <div className='title'>
                    <h2 className='greeting1'> Welcome to our Studio </h2>
                    <h1 className='greeting2'> IT'S NICE TO MEET YOU </h1>
                    <button className='button'> TELL ME MORE </button>
                </div>
                <div className='services' >
                    <h1> SERVICES </h1>
                    <p> Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className='trio'>
                    <div className='individual' >
                        <h3> E- Commerce </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                    <div className='individual-2' >
                        <h3> Responsive Design </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                    <div className='individual-2' >
                        <h3> Web Security </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                </div>

            </div >
        )
    }
}

export default Header
                // <div className='title'>
                //     <h2> Welcome to our Studio </h2>
                //     <h1> IT'S NICE TO MEET YOU </h1>
                // </div>