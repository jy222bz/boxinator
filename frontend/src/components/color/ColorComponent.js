import React from 'react'
import { CirclePicker } from 'react-color'
/**
 * This class for the custome Color Picker.
 * @author Jacob Yousif
 *
 * @class ColorComponent
 * @extends {React.Component}
 */
class ColorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ''
    }
  }

  init = () => {
    this.setState({ background: '' })
  }



  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.props.onChange(color);
  }

  render() {
    return (
      <CirclePicker
        width={'100%'}
        circleSize={28}
        colors={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#EB9694', '#FAD0C3', '#FEF3BD', '#e84393', '#2d3436', '#fff', '#C1E1C5', '#00b894', '#7f8c8d', '#006266', '#EA2027', '#FDA7DF', '#44bd32', '#e1b12c', '#aaa69d', '#218c74', '#ff5252', '#7f8fa6', '#BDC581', '#CAD3C8']}
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    )
  }
}



export default ColorComponent