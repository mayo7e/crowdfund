import React from 'react'
import Closedark from "./assets/close-dark.svg"

const Backproject = () => {
  return (
    <div id="overlay-02">
    <div className='backproject' >
        <section className='backproject-header'>
            <div  >
                <h2>Back this project</h2>
                <img className="close-icon" alt="close icon" src={Closedark} />
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
        </section>

        <section className='backproject-action' >
            <div className='flex' >
                <div className='checkbox-grp' >
                     <input  type="checkbox" />
                </div>
                <div>
                    <h3>Pledge with no reward</h3>
                </div>
            </div>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
        </section>

        <section className='backproject-action' >
            <div className='flex' >
                <div className='checkbox-grp' >
                        <input  type="checkbox" />
                    </div>
                <div>
                    <h3>Bamboo Stand</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <p><span>101</span> left</p>
        </section>

        <section className='backproject-action' >
            <div className='flex' >
                <div className='checkbox-grp' >
                        <input  type="checkbox" />
                    </div>
                <div>
                    <h3>Black Edition Stand</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included..</p>
            <p><span>64</span> left</p>
        </section>

        <section className='backproject-action' >
            <div className='flex' >
                <div className='checkbox-grp' >
                        <input  type="checkbox" />
                    </div>
                <div>
                    <h3>Mahogany Special Edition</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            <p><span>0</span> left</p>
        </section>

        </div>
    </div>
  )
}

export default Backproject
