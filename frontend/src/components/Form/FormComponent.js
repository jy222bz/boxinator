import React from "react"
import isValidInput from '../../models/input-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Color from '../color/ColorComponent'
import '../../css/master.css';
import Service from '../../services/rest-service'
import { connect } from "react-redux";
import { setNewState } from "../../redux/reduceSlice";
import hexRgb from 'hex-rgb';


/**
 * A Form component for the add box operation.
 * @author Jacob Yousif
 *
 * @class FormComponent
 * @extends {React.Component}
 */

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: '',
            weight: 0,
            country: '',
            show: false
        }
        this.showHide = this.showHide.bind(this)
    }

    showHide() {
        const { show: isShow } = this.state;
        this.setState({ show: !isShow })
    }

    setName = val => {
        this.setState({ name: val })
    }

    setWeight = val => {
        this.setState({ weight: val })
    }

    setCountry = val => {
        this.setState({ country: val })
    }

    onInputChage = value => {
        this.setState({
            color: value.hex
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        try {
            isValidInput(this.state.name, this.state.country, this.state.color, this.state.weight)
            let data = { name: this.state.name.toUpperCase(), weight: this.state.weight, color: hexRgb(this.state.color, { format: 'css' }), country: this.state.country.toUpperCase() }
            Service.post(data)
            toast.success('The information was successfully inserted into the database.', { hideProgressBar: true })
            this.setState({ country: '', name: '', color: '', weight: 0 })
            this.props.setNewState(true)
            this.setState({ show: false })
        } catch (err) {
            toast.error(err.message, { hideProgressBar: true })
        }
    }

    changeButtonText() {
        return this.state.show === true ? 'Click here to close the Color Picker' : 'Click here to show the Color Picker'
    }

    render() {
        return (
            <section data-testid='id__section_main' className="sec2" onSubmit={this.onSubmit}>
                <div data-testid='id__div' >
                    <h2 data-testid='id__headline'>The Required Info</h2>
                    <form data-testid='id__form'>
                        <label data-testid='id__label__name'>Name:</label><br />
                        <input data-testid='id__input__name' type="text" id="name" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setName(e.target.value)}></input><br />
                        <label data-testid='id__label__weight'>Weight:</label><br />
                        <input data-testid='id__input__weight' type="number" id="number" name="weight" placeholder="weight in KG" value={this.state.weight} onChange={(e) => this.setWeight(e.target.value)}></input><br />
                        <input type="button" onClick={this.showHide} data-testid='id__label__color' className="color__button"
                            id="color___label" value={this.changeButtonText()}></input><br /><br />
                        {this.state.show && <div data-testid='id__div__color' className="color__div">
                            <Color ref={this.ref} color={this.state.color} onChange={this.onInputChage} />
                        </div >}<br />
                        <div data-testid='id__div__select'  >
                            <label data-testid='id__label__country'   >Country:</label><br></br>
                            <select data-testid='id__select__country' className="select" id="slct" value={this.state.country} onChange={(e) => this.setCountry(e.target.value)}>
                                <option data-testid='id__select__1' value="">Select a country</option>
                                <option data-testid='id__select__2' value="Sweden">Sweden</option>
                                <option data-testid='id__select__3' value="China">China</option>
                                <option data-testid='id__select__4' value="Brazil">Brazil</option>
                                <option data-testid='id__select__5' value="Australia">Australia</option>
                            </select>
                        </div><br />
                        <input data-testid='id__input__submit' type="submit" value="Save"></input> <br />
                    </form>
                </div>
                <ToastContainer />
            </section>
        )
    }
}

/**
 * A function to map the the state to the props of the object.
 *
 * @param {*} state
 */
const mapStateToProps = (state) => ({
    update: state.isNewState
})

export default connect(mapStateToProps, { setNewState })(FormComponent)

