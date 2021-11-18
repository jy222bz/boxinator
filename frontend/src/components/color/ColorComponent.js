import React from 'react'
import { GithubPicker as ColorPicker } from 'react-color'
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
      <ColorPicker
        width={'60%'}
        colors={['#FFB74D', '#008B02', '#EB9694', '#FAD0C3', '#FEF3BD', '#e84393', '#2d3436', '#C1E1C5', '#00b894', '#7f8c8d', '#fff', '#006266', '#EA2027'
          , '#795548', "#f44336", "#e91e63"]}
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    )
  }
}



export default ColorComponent