import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class ButtonsList extends Component {

    render() {
        const { dimension, buttonsList, itemBackgroundColor, direction, degree, distance, isOpen} = this.props
        return (<React.Fragment>
            {
                buttonsList.map((item, index) => <Button 
                    key={index} 
                    index={index}
                    dimension={dimension}
                    direction={direction}
                    degree={degree}
                    distance={distance}
                    itemBackgroundColor={itemBackgroundColor}
                    onClick={item.onClick} 
                    src={item.src}
                    isOpen={isOpen}
                    nbrItems={buttonsList.length - 1 }
                    />)
            }
        </React.Fragment>)
    }
}

ButtonsList.defaultProps = {
    buttonsList: []
}
  
ButtonsList.propTypes = {
    buttonsList: PropTypes.array,
    distance: PropTypes.number,
    dimension: PropTypes.number.isRequired, 
    itemBackgroundColor: PropTypes.string,   
    isOpen: PropTypes.bool.isRequired, 
    direction: PropTypes.string.isRequired, 
    degree: PropTypes.number.isRequired, 
}
  
export default ButtonsList