import React from 'react'
import FloatingButtons from 'react-floating-buttons'

import instagram from  './assets/instagram.svg'
import github from  './assets/github.svg'
import dribbble from  './assets/dribbble.svg'
import linkedin from  './assets/linkedin.svg'
import medium from  './assets/medium.svg'
import spotify from  './assets/spotify.svg'
import twitter from  './assets/twitter.svg'


function App () {

    const buttonsList = [
        { onClick: ()=> alert('clicked instagram'), src: instagram },
        { onClick: ()=> alert('clicked medium'), src: medium },
        { onClick: ()=> alert('clicked dribbble'), src: dribbble },
        { onClick: ()=> alert('clicked github'), src: github },
        { onClick: ()=> alert('clicked linkedin'), src: linkedin },
        { onClick: ()=> alert('clicked spotify'), src: spotify },
        { onClick: ()=> alert('clicked twitter'), src: twitter },
    ]

    return (<>
        <h1>react-floating-buttons exemples</h1>
        <div className="wrapper">
            <div className="exemple-wrapper horizantal">
                <h2>Horizantal floating button</h2>
                <div className="exemples">
                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons  
                                    buttonType='hori-dots' 
                                    dimension={50} 
                                    buttonsList={buttonsList} 
                                    top={'calc(50% - 25px)'} 
                                    left={'5%'} 
                                    direction="right" /> `}
                        </code>
                        <div className="component">
                            <FloatingButtons  
                                buttonType='hori-dots' 
                                dimension={50} 
                                buttonsList={buttonsList} 
                                top={'calc(50% - 25px)'} 
                                left={'5%'} 
                                direction="right" 
                                />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    buttonType='plus' 
                                    dimension={50} 
                                    buttonsList={buttonsList} 
                                    top={'calc(50% - 25px)'} 
                                    left={'calc(95% - 50px)'} 
                                    direction="left" /> `}
                        </code>
                        <div className="component">
                            <FloatingButtons 
                                buttonType='plus' 
                                dimension={50} 
                                buttonsList={buttonsList} 
                                top={'calc(50% - 25px)'} 
                                left={'calc(95% - 50px)'} 
                                direction="left" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="exemple-wrapper vertical">
                <h2>vertical floating button</h2>
                <div className="exemples">
                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons  
                                    buttonType='vert-dots' 
                                    dimension={50} 
                                    buttonsList={buttonsList} 
                                    top={'25px'} 
                                    left={'50%'} 
                                    direction="down"
                                    buttonColor="#f1f2f3"
                                    backgroundColor="#212121"
                                    itemBackgroundColor="#212121" />    `}
                        </code>
                        <div className="component">
                            <FloatingButtons  
                                buttonType='vert-dots' 
                                dimension={50} 
                                buttonsList={[...buttonsList.slice(0, 3)]} 
                                top={'25px'} 
                                left={'50%'} 
                                direction="down"
                                buttonColor="#f1f2f3"
                                backgroundColor="#212121"
                                itemBackgroundColor="#212121" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    buttonType='plus' 
                                    dimension={50} 
                                    buttonsList={buttonsList}
                                    top={'250px'} 
                                    left={'50%'} 
                                    direction="up" 
                                    buttonColor="#A074C4"
                                    backgroundColor="#090B10"
                                    itemBackgroundColor="#090B10" />    `}
                        </code>
                        <div className="component">
                            <FloatingButtons 
                                buttonType='plus' 
                                dimension={50} 
                                buttonsList={[...buttonsList.slice(0, 3)]}
                                top={'250px'} 
                                left={'50%'} 
                                direction="up" 
                                buttonColor="#A074C4"
                                backgroundColor="#090B10"
                                itemBackgroundColor="#090B10"
                                />
                        </div>
                    </div>
                </div>
            </div>

            <div className="exemple-wrapper circular">
                <h2>circular floating button</h2>
                <div className="exemples">
                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    dimension={40}
                                    buttonType='plus' 
                                    degree={360} 
                                    distance={80} 
                                    buttonsList={buttonsList} 
                                    top={'calc(50% - 20px)'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component">
                            <FloatingButtons 
                                dimension={40}
                                buttonType='plus' 
                                degree={360} 
                                distance={80} 
                                buttonsList={buttonsList} 
                                top={'calc(50% - 20px)'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    dimension={40}
                                    degree={180} 
                                    distance={100} 
                                    buttonsList={buttonsList} 
                                    top={'50px'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component half">
                            <FloatingButtons 
                                dimension={40}
                                degree={180} 
                                distance={100} 
                                buttonsList={buttonsList} 
                                top={'50px'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    dimension={40}
                                    degree={-180} 
                                    distance={100} 
                                    buttonsList={buttonsList} 
                                    top={'350px'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component half">
                            <FloatingButtons 
                                dimension={40}
                                degree={-180} 
                                distance={100} 
                                buttonsList={buttonsList} 
                                top={'150px'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    dimension={40}
                                    buttonType='plus' 
                                    degree={-250} 
                                    distance={100} 
                                    buttonsList={buttonsList} 
                                    top={'calc(50% - 20px)'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component">
                            <FloatingButtons 
                                dimension={40}
                                buttonType='plus' 
                                degree={-250} 
                                distance={100} 
                                buttonsList={buttonsList} 
                                top={'calc(50% - 20px)'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`  <FloatingButtons 
                                    dimension={40}
                                    buttonType='plus' 
                                    degree={90} 
                                    distance={100} 
                                    buttonsList={[...buttonsList.slice(0,4)]} 
                                    top={'50px'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component half">
                            <FloatingButtons 
                                dimension={40}
                                buttonType='plus' 
                                degree={90} 
                                distance={100} 
                                buttonsList={[...buttonsList.slice(0,4)]} 
                                top={'50px'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>

                    <div className="exemple">
                        <code>
                            {`   <FloatingButtons 
                                    dimension={40}
                                    buttonType='plus' 
                                    degree={-90} 
                                    distance={100} 
                                    buttonsList={[...buttonsList.slice(0,4)]} 
                                    top={'350px'} 
                                    left={"calc(50% - 20px)"} 
                                    direction="circular" /> `}
                        </code>
                        <div className="component half">

                            <FloatingButtons 
                                dimension={40}
                                buttonType='plus' 
                                degree={-90} 
                                distance={100} 
                                buttonsList={[...buttonsList.slice(0,4)]} 
                                top={'150px'} 
                                left={"calc(50% - 20px)"} 
                                direction="circular" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default App
