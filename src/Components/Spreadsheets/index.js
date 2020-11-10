import React, { Component } from 'react';
import 'handsontable/dist/handsontable.full.css';
import Handsontable from "handsontable";
import { HotTable, HotColumn } from '@handsontable/react';



class Spreadsheet extends Component {
    state = {
        hotData: Handsontable.helper.createSpreadsheetData(50, 10),
        width: 1500,
        height: 1000,
        stretchH: 'all',
    }

    render() {
        return (
            <header id="spreadsheet" className="spreadsheet">
                <div className="container">
                    <div className="row">
                        <div id="hot-app" className="spreadsheet--wrapper">
                        <HotTable data={this.state.hotData} colHeaders={true} height={this.state.height}rowHeaders={true} licenseKey="non-commercial-and-evaluation" stretchH={this.state.stretchH} width={this.state.width}/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Spreadsheet;