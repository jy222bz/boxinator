import React from 'react'
import { TwitterPicker as ColorPicker } from 'react-color'
/**
 * This class for the custome Color Picker.
 * @author Jacob Yousif
 *
 * @class ColorComponent
 * @extends {React.Component}
 */
class ColorComponent extends React.Component {

  handleChangeComplete = (color) => {
    this.props.onChange(color)
  }

  render() {
    return (
      <ColorPicker
        width={'80%'}
        colors={['#FFB74D', '#008B02', '#EB9694', '#FAD0C3', '#FEF3BD', '#e84393', '#2d3436', '#C1E1C5', '#00b894', '#7f8c8d', '#fff', '#78e08f', '#EA2027', '#f8c291']}
        color={this.props.color}
        onChangeComplete={this.handleChangeComplete}
      />
    )
  }
}



export default ColorComponent