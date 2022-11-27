import React from 'react'
import Logo from "./assets/crowdfund.png"
import mLogo from "./assets/m-icon.png"
import Menu from "./assets/hamburger.svg"
import Close from "./assets/close.png"
import Bookmark from  "./assets/bookmark.png"
import RangeSlider from  "./assets/rangeslider.png"
// import Backproject from "./backproject.js"



const Home = () => {
  return (
    <div className='home' >
        <header> 
                <nav>

                    <ul>
                        <li>
                            <img className="brand-logo" alt="crowdfund's logo" src={Logo} />
                        </li>
                        <li className="hamburger-menu" >
                            <img className="hamburger-menu_logo" alt="hamburger menu icon" src={Menu} />   
                        </li>
                    </ul>
                
                </nav>
                
        </header>
        <div id="overlay">
                          <div id="modal" >
                          <button id="close-modal" ><img alt="close icon" src={Close} /></button>
                                      <li><a href="./index.html">About</a></li>
                                      <li><a href="./about.html">Discover</a></li>
                                      <li><a href="./about.html">Get Started</a></li>
                          
                                      
                                  </div>
                        </div>
      

        <main>
                <div className="m-logo-grp" >
                    <img className="icon-m" alt="styled icon -m in a circle with black background" src={mLogo} />
                </div>
            <section className="section-01" >
                <h1> Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className='backproject-action'>
                    <button className="btn-grp btn_01" >back this project</button>
                    
                    <div className='logo-grp'>
                         <img className="bookmark-icon" alt="bookmark icon" src={Bookmark} />
                    </div>
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
                <img className="progress-bar" alt="progress bar" src={RangeSlider} />
            </section>

            <section className="section-03" >
                <h2>About this project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br />    
                <br />    
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

                <div className='project-details' >
                    <div>
                        <h3>Bamboo Stand</h3>
                        <h4>Pledge $75 or more</h4>
                    </div>
                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                        campaign, and you’ll be added to a special Backer member list.</p>
                    <div>
                        <div className='project-details-figures' >
                            <h1>101</h1>
                            <p>left</p>
                        </div>
                        <button className="btn-grp btn_02" >select reward</button>
                    </div>

                </div>

                <div className='project-details' >
                    <div>
                        <h3>Black Edition Stand</h3>
                        <h4>Pledge $75 or more</h4>
                    </div>
                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    <div>
                    <div className='project-details-figures' >
                            <h1>64</h1>
                            <p>left</p>
                        </div>
                        <button className="btn-grp btn_02" >select reward</button>
                    </div>

                </div>

                <div className='project-details' >
                    <div>
                        <h3>Mahogany Special Edition</h3>
                        <h4>Pledge $75 or more</h4>
                    </div>
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    <div>
                    <div className='project-details-figures' >
                            <h1>0</h1>
                            <p>left</p>
                        </div>
                        <button className="btn-grp btn_02" >select reward</button>
                    </div>

                </div>
               


            </section>
            
        

            
        </main>
        <div id="overlay-02">
    <div className='backproject' >
        <section>
            <div>
                <h2>Back this project</h2>
                <img className="close-icon" alt="close icon" src="0#" />
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
        </section>

        <section>
            <div>
                <input  type="checkbox" />
                <div>
                    <h3>Pledge with no reward</h3>
                </div>
            </div>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
        </section>

        <section>
            <div>
                <input  type="checkbox" />
                <div>
                    <h3>Bamboo Stand</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <p>101 <span>left</span></p>
        </section>

        <section>
            <div>
                <input  type="checkbox" />
                <div>
                    <h3>Black Edition Stand</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included..</p>
            <p>64 <span>left</span></p>
        </section>

        <section>
            <div>
                <input  type="checkbox" />
                <div>
                    <h3>Mahogany Special Edition</h3>
                    <h3>Pledge $25 or more</h3>
                </div>
            </div>
            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            <p>0<span>left</span></p>
        </section>

        </div>
    </div>

                        
    </div>
  )
}

export default Home
