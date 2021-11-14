import React from "react"
import sorter from '../../models/sort';
import '../../css/master.css';
import Service from '../../services/rest-service'
import { ToastContainer, toast } from 'react-toastify';
/**
 * A component for listing the boxes.
 * @author Jacob Yousif
 *
 * @class List
 * @extends {React.Component}
 */
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [],
      order: 'ACS',
      summary: { totalWeight: 0, totalCost: 0 }
    }
  }

  sort = (col) => {
    if (this.state.boxes.length > 1) {
      var sorted = sorter(this.state.boxes, col, this.state.order)
      this.setState({ boxes: sorted.getData() })
      this.setState({ order: sorted.getNextOrder() })
    }
  }

  componentDidMount() {
    Service.getAll().then((res) => {
      this.setState({ boxes: res.data })
    }).then(() => {
      Service.getSummary().then((res2) => {
        this.setState({ summary: res2.data })
      }).catch((err) => {
        toast.error(err.message, { hideProgressBar: true });
      })
    })
  }

  render() {
    return (
      <div data-testid='id__main__div' className="con">
        <h1>List Of Disbatches</h1>
        <table data-testid='id__table' className="zigzag">
          <tbody>
            <tr >
              <th data-testid='id__header__name' className="header" onClick={() => this.sort("name")}>Receiver</th>
              <th data-testid='id__header__cost' className="header" onClick={() => this.sort("cost")}>Cost</th>
              <th data-testid='id__header__color' className="header">Box Color</th>
              <th data-testid='id__header__weight' className="header" onClick={() => this.sort("weight")} >Weight</th>
            </tr>
          </tbody>
          <tbody>
            {this.state.boxes.map((info) => (
              <tr className="tr" key={info.id}>
                <td >{info.name}</td>
                <td >{info.cost} SEK</td>
                <td style={{ backgroundColor: info.color }}></td>
                <td >{info.weight} KG</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Summary</h1>
        <table className="stra">
          <tbody>
            <tr>
              <td data-testid='id__header__totalCost' name="totalCostCol" className="header"> Total Shipping Cost</td>
              <td data-testid='id__header__totalWeight' name="totalWeightCol" className="header">Total Shipping Weight</td>
            </tr>
          </tbody>
          <tbody>
            <tr >
              <td data-testid='id__header__c' >{this.state.summary.totalCost} SEK</td>
              <td data-testid='id__header__w' >{this.state.summary.totalWeight} KG</td>
            </tr>
          </tbody>
        </table>
        <ToastContainer />
      </div>

    );
  }
}

export default List