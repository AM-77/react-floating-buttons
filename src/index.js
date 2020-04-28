/**
* @param {string} buttonType the main button type (hmaburger, plus, vert-dots or hori-dots)       
* @param {number} dimension the buttons dimension   
* @param {number} top the offsetTop position of the nav       
* @param {number} left the offsetLeft position of the nav
* @param {string} backgroundColor the main button background color       
* @param {string} itemBackgroundColor the nav item button background color       
* @param {string} buttonColor the color of the main button      
* @param {string} direction the direction of the nav when opened (left, right, top, bottom and circular)
* @param {number} distance the distance between the main button and the nav items ** required when direction='circular' **
* @param {number} degree the angle of the circle ** required when direction='circular' **
* @param {array} buttonsList the nav items [{ onClick: click handler, src: 'for the icon'}]
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toggler from './components/Toggler'
import ButtonsList from './components/ButtonsList'

class FloatingButtons extends Component {

    constructor(props){
        super(props)
        this.state = { isOpen: false }
    }

    toggleOpen = () => {
        this.setState((state) => ({ 
            ...state,
            isOpen: !state.isOpen
        }))
    }

    render() {
        const { dimension, direction, distance, degree, top, left, backgroundColor, buttonColor, buttonsList, itemBackgroundColor, buttonType } = this.props
        return (
            <div style={{ position: 'absolute', top, left }}>            
                <Toggler 
                    buttonType={buttonType}
                    dimension={dimension}
                    backgroundColor={backgroundColor}
                    buttonColor={buttonColor}
                    toggleOpen={this.toggleOpen}
                    isOpen={this.state.isOpen}
                />
                <ButtonsList 
                    buttonsList={buttonsList} 
                    dimension={dimension}
                    itemBackgroundColor={itemBackgroundColor}
                    isOpen={this.state.isOpen}
                    direction={direction}
                    degree={degree}
                    distance={distance}
                    />
            </div>
        )
    }
}

FloatingButtons.defaultProps = {
    buttonType: 'hamburger',
    dimension: 40,
    top: 0,
    left: 0,
    backgroundColor: '#f8f9fa',
    itemBackgroundColor: '#f8f9fa',
    buttonColor: '#313131',
    direction: "circular",
    distance: 100,
    degree: 180,
}
  
FloatingButtons.propTypes = {
    buttonType: PropTypes.string,
    dimension: PropTypes.number,
    top: PropTypes.string,
    left: PropTypes.string,
    backgroundColor: PropTypes.string,
    itemBackgroundColor: PropTypes.string,
    buttonColor: PropTypes.string,
    distance: PropTypes.number,    
    direction: PropTypes.string, 
    degree: PropTypes.number,
    buttonsList: PropTypes.array.isRequired,
}
  
export default FloatingButtons
