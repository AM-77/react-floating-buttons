import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

    constructor(props){        
        super(props)
        const { dimension, itemBackgroundColor, index } = this.props
        this.initButtonStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${dimension}px`,
            width: `${dimension}px`,
            backgroundColor: itemBackgroundColor,
            borderRadius: `${dimension * 0.5}px`, 
            padding: `${(dimension * 0.25)}px`,
            cursor: 'pointer',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 1,
            opacity: 0,
            borderWidth: '1px',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)',
            outline: 'none',
            transition: `all ${index * 50 + 200}ms cubic-bezier(0.71, 0.71, 0, 1.18) 0ms`,
        }

        this.imgStyle = {
            width: '100%',
            height: '100%'
        }

        this.state = {
            buttonStyle: {...this.initButtonStyle},
        }
    }

    componentDidUpdate(prevProps){    
        if(prevProps !== this.props){
            let { dimension, index, nbrItems, isOpen, direction, degree, distance } = this.props
    
            if(isOpen){

                let translateX = 0, translateY = 0
                if(direction === 'up') translateY = -((dimension + dimension * 0.33) * (index + 1 )) 
                else if(direction === 'down') translateY = ((dimension + dimension * 0.33) * (index + 1 )) 
                else if(direction === 'right') translateX = ((dimension + dimension * 0.33) * (index + 1 )) 
                else if(direction === 'left') translateX = -((dimension + dimension * 0.33) * (index + 1 )) 
                else {
                    if(!distance) distance = dimension * 2
                    
                    let angle = degree / nbrItems
                    if(degree >= 360) angle = 360 / ( nbrItems + 1 )
        
                    let radian = angle * (Math.PI / 180)
                    translateX = (Math.cos(( radian )* index) * distance)
                    translateY = (Math.sin(( radian )* index) * distance)
                }

                this.setState((state) => ({
                    ...state,
                    buttonStyle:{
                        ...state.buttonStyle,
                        opacity: "1",
                        transform: `translate(${translateX}px, ${translateY}px)`            
                    }
                }))
            }else{
                this.setState((state) => ({
                    ...state,
                    buttonStyle:{
                        ...state.buttonStyle,
                        opacity: "0",
                        transform: `translate(0px, 0px)`            
                    }
                }))
            }
        }
    }

    mouseEnter = () => {
        const { isOpen } = this.props
        if(isOpen)
            this.setState((state) => ({
                ...state,
                buttonStyle: {
                    ...state.buttonStyle,
                    boxShadow: 'none'
                }
            }))
    }

    mouseLeave = () => {
        this.setState((state) => ({
            ...state,
            buttonStyle: { 
                ...state.buttonStyle,  
                boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)'
            }
        }))
    }

    pointerDown = () => {
        this.setState((state) => ({
            ...state,
            buttonStyle: {
                ...state.buttonStyle,
                boxShadow: 'inset 0px 1px 2px 1px rgba(0, 0, 0, .15)'
            }
        }))
    }

    pointerUp = () => {
        this.setState((state) => ({
            ...state,
            buttonStyle: { 
                ...state.buttonStyle,  
                boxShadow: 'none'
            }
        }))
    }

    render() {
        const {onClick, src} = this.props
        return (<button 
            onPointerDown={this.pointerDown}  
            onPointerUp={this.pointerUp} 
            onMouseEnter={this.mouseEnter} 
            onMouseLeave={this.mouseLeave} 
            onClick={onClick} 
            style={this.state.buttonStyle}>
            <img style={this.imgStyle} src={src} alt='svg icon' />
        </button>)
    }
}

Button.defaultProps = {
    onClick: () => {},
}

Button.propTypes = {
    distance: PropTypes.number,
    degree: PropTypes.number.isRequired,
    dimension: PropTypes.number.isRequired, 
    itemBackgroundColor: PropTypes.string, 
    onClick: PropTypes.func, 
    src: PropTypes.string.isRequired, 
    index: PropTypes.number.isRequired, 
    nbrItems: PropTypes.number.isRequired, 
    isOpen: PropTypes.bool.isRequired, 
    direction: PropTypes.string.isRequired, 
}

export default Button