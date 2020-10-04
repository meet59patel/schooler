import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardBody, Row } from "reactstrap";

export default class AttendanceCard extends Component {
  render() {
    return (
      <div>
        <Card className="shadow">
          <CardHeader className="bg-transparent">
            <Row className="align-items-center">
                <h2 className="mb-0">Attendence (%)</h2>
            </Row>
          </CardHeader>
          <CardBody>
            {/* Chart */}
            <div className="chart">
              <Pie data={attendence.data} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

// Change this by fetch data when backend api is created.
let attendence = {
    data: {
      labels: ["Absent", "Present"],
      datasets: [
        {
          data: [20, 80], // [absent, present]
          backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)"]
        }
      ]
    }
}