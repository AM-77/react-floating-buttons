import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toggler extends Component {

    constructor(props){
        super(props)
        const { dimension, backgroundColor, buttonColor } = this.props

        this.initButtonStyle = {
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: `${dimension}px`,
            width: `${dimension}px`,
            backgroundColor,
            borderRadius: `${dimension * 0.5}px`, 
            padding: `${(dimension * 0.2) - 1}px`,
            cursor: 'pointer',
            zIndex: 2,
            position: "relative",
            opacity: "0.9",
            borderWidth: '1px',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)',
            transition: 'all 350ms cubic-bezier(0.25, 0, 0, 1)',
            outline: 'none'
        }

        this.initSpanStyle = {
            display: 'block',
            backgroundColor: buttonColor,
            width: `${dimension * .6}px`,
            height: `${dimension * 0.075}px`,
            borderRadius: `${(dimension * 0.075) / 2}px`,
            transformOrigin: 'center left',
            transition: 'all 350ms cubic-bezier(0.25, 0, 0, 1)',
            position: 'relative'
        }

        this.state = {
            buttonStyle: this.initButtonStyle,
            spanStyle: this.initSpanStyle,
            spanOneStyle: {},
            spanTwoStyle: {},
            spanThreeStyle: {}
        }

    }    

    componentDidMount() {
        const { dimension, buttonType } = this.props

        if(buttonType === 'plus'){
            this.setState((state) => ({
                ...state,
                spanStyle:{
                    ...state.spanStyle,
                    width: (dimension * .5),
                    height: dimension * 0.075,
                    position: 'absolute',
                    transformOrigin: 'center center'
                },
                spanTwoStyle:{ display: 'none'},
                spanThreeStyle:{ transform: 'rotate(90deg)' }
            }))
        }else{
            if(buttonType === 'hori-dots' || buttonType === 'vert-dots'){
                this.setState((state) => ({
                    ...state,
                    spanStyle:{
                        ...state.spanStyle,
                        width: dimension * 0.1,
                        height: dimension * 0.1,
                        borderRadius: dimension * 0.1
                    }
                }))

                if(buttonType === 'hori-dots'){
                    this.setState((state) => ({
                        spanStyle:{
                            ...state.spanStyle,
                            position: 'absolute'
                        },
                        spanOneStyle:{ 
                            left: '25%' 
                        },
                        spanThreeStyle:{
                            right: '25%'
                        }
                    }))
                }
            }
        }

    }

    toggleOpen = () => {
        const { buttonType, toggleOpen } = this.props
        toggleOpen()

        if(buttonType === 'plus'){
            this.animatePlusButton()
        }else if(buttonType === 'hamburger'){
            this.animateHmburgerButton()
        } 
    }

    animatePlusButton = () => {
        const { isOpen } = this.props
        if(!isOpen){
            this.setState((state) => ({
                ...state,
                buttonStyle: {
                    ...state.buttonStyle,
                    transform: 'rotate(135deg)'
                }
            }))
        }else{
            this.setState((state) => ({
                ...state,
                buttonStyle: {
                    ...state.buttonStyle,
                    transform: 'rotate(0deg)'
                }
            }))
        }
    }

    animateHmburgerButton = () => {
        const { isOpen } = this.props
        if(!isOpen){
            this.setState((state) => ({
                ...state,
                spanOneStyle:{
                    transform: 'rotate(45deg)',
                    left: '12.5%',
                    top: '-2.5%'
                },
                spanTwoStyle:{
                    transform: 'rotateY(90deg)',
                    opacity: 0
                },
                spanThreeStyle:{
                    transform: 'rotate(-45deg)',
                    left: '12.5%',
                    top: '2.5%'
                }
            }))
        }else{
            this.setState((state) => ({
                ...state,
                spanOneStyle:{
                    transform: 'rotate(0deg)',
                    left: '0%',
                    top: '0%'
                },
                spanTwoStyle:{
                    transform: 'rotateY(0deg)',
                    opacity: 1
                },
                spanThreeStyle:{
                    transform: 'rotate(0deg)',
                    left: '0%',
                    top: '0%'
                }
            }))
        }
    }

    mouseEnter = () => {
        this.setState((state) => ({
            ...state,
            buttonStyle: {
                ...state.buttonStyle,
                opacity: '1',
                boxShadow: 'none'
            }
        }))
    }

    mouseLeave = () => {
        const { isOpen } = this.props
        if(isOpen){
            this.setState((state) => ({
                ...state,
                buttonStyle: { ...state.buttonStyle}
            }))
        }else{
            this.setState((state) => ({
                ...state,
                buttonStyle: { ...this.initButtonStyle}
            }))
        }
    }

    render() {
        return (<button 
            onMouseEnter={this.mouseEnter} 
            onMouseLeave={this.mouseLeave} 
            onClick={this.toggleOpen} 
            style={this.state.buttonStyle}>
            <span style={{...this.state.spanStyle, ...this.state.spanOneStyle}}></span>
            <span style={{...this.state.spanStyle, ...this.state.spanTwoStyle}}></span>
            <span style={{...this.state.spanStyle, ...this.state.spanThreeStyle}}></span>
        </button> )
    }
}

Toggler.defaultProps = {
    dimension: 80,
    backgroundColor: '#f8f9fa',
    buttonColor: '#313131'
}

Toggler.propTypes = {
    buttonType: PropTypes.string.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    dimension: PropTypes.number,
    backgroundColor: PropTypes.string,
    buttonColor: PropTypes.string
}

export default Toggler
