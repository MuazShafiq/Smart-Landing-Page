import React, { Component } from 'react'

class Background extends Component {
    render() : React.ReactNode {
        return (
            <section data-name='background-img' className='flex absolute max-h-screen -z-100'>
                <img src="/images/bgImg.jpg" alt="" className='' />
            </section>
        )
    }
}


export default Background