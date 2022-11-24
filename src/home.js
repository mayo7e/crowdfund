import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div>
        <nav>
          
            <img className="brand-logo" alt="crowdfund's logo" src="0#" />
            <img className="hamburger-menu" alt="hamburger menu icon" src="0#" />
        </nav>
        <main>
            <section className="section-01" >
                <img className="icon-m" alt="styled icon -m in a circle with black background" src="0#" />
                <h1> mastercraft Bamboo Monitor Riser</h1>
                <p>a beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                <div>
                    {/* <button>back this project</button> */}
                    <a href="0#"><Link target="_blank" to="/backproject"><span>back this project</span></Link></a>
                    <img className="bookmark-icon" alt="bookmark icon" src="0#" />
                </div>
            </section>

            <section className="section-02" >
                <div>
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </div>
                <div>
                    <h1>5,007</h1>
                    <p>total backers</p>
                </div>
                <div>
                    <h1>56</h1>
                    <p>days left</p>
                </div>
                <img className="progress-bar" alt="progress bar" />
            </section>

            <section className="section-03" >
                <h2>About this project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br />    
                <br />    
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

                <div className='project-details_01' >
                    <div>
                        <h3>Bamboo Stand</h3>
                        <h3>Pledge $25 or more</h3>
                    </div>
                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                        campaign, and you’ll be added to a special Backer member list.</p>
                    <div>
                        <div>
                            <h1>101</h1>
                            <p>left</p>
                        </div>
                        <button>select reward</button>
                    </div>

                </div>

                <div className='project-details_02' >
                    <div>
                        <h3>Black Edition Stand</h3>
                        <h3>Pledge $75 or more</h3>
                    </div>
                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    <div>
                        <div>
                            <h1>64</h1>
                            <p>left</p>
                        </div>
                        <button>select reward</button>
                    </div>

                </div>

                <div className='project-details_03' >
                    <div>
                        <h3>Mahogany Special Edition</h3>
                        <h3>Pledge $200 or more</h3>
                    </div>
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    <div>
                        <div>
                            <h1>0</h1>
                            <p>left</p>
                        </div>
                        <button>out of stock</button>
                    </div>

                </div>
               


            </section>

        </main>
    </div>
  )
}

export default Home
