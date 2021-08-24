import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Badge from './assets/badge.png';
import Chrome from './assets/chrome.png';
import Mozilla from './assets/firefox.png';
import Safari from './assets/safari.png';
import Explorer from './assets/explorer.png';
import Opera from './assets/opera.png'
import Chart from 'react-apexcharts';
import './App.css';

function App() {
  
  const optionsfirst = {
    chart: {
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    legend: {
      show: false
    },
    grid: {
      show: false
    },
    xaxis : {
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
  }
  };

  const optionssecond = {
    chart: {
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false
    },
    fill: {
      colors: '#FFAD5F'
    }
  };

  const seriesfirst = [{
    name: "Subscribers Gained",
    data: [45, 85, 65, 45, 65]
  }];

  const seriessecond = [{
    name: "Orders Received",
    data: [35,25,40,55,60]
  }];

  const seriesthird = [70, 45, 35];

  const seriesfourth = [{
    name: "Budget",
    data: [30,45,60,40,35,50,70]
  }];

  const seriesfifth = [768617, 13561];
  
  return (
    <div className="App" style={{backgroundColor: "#F2F2F2"}}>
      <Container>
        <Row className="py-5">
        {/* width: "400px", height: "200px",  */}
          <Col xs={12} md={6} xl={4}>
            <Card style={{borderRadius: "10px", padding: "1rem", height: "220px"}}>
              <Card.Img style={{width: "72px", position: "absolute", top: "0px", right: "20px"}} src={Badge} alt="badge" variant="top"/>
              <Card.Body>
                <h5 className="text-secondary">
                Congratulations 🎉 John!
                </h5>
                <p className="text-secondary">
                You have won gold medal
                </p>
                <h3 style={{color: "#7367F0"}}>
                $48.9k
                </h3>
                <Button style={{backgroundColor: "#7367F0"}}>View Sales</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={8}>
            <Card className="mt-4 mt-md-0" style={{borderRadius: "10px", padding: "1rem"}}>
              <Card.Title className="text-secondary py-3">Statistics</Card.Title>
              <Card.Body>
                <Row className="py-3">
                  <Col sm={6} xl={3}>
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle me-2 d-flex justify-content-center align-items-center" style={{backgroundColor: "#EEEDFD", padding: "0.2rem", width: "48px", height: "48px"}}>
                        <svg style={{color: "#7367F0"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                      </div>
                      <div>
                        <p className="fw-bold text-secondary">230k <br /><span className="fw-normal">Sales</span></p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} xl={3}>
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle me-2 d-flex justify-content-center align-items-center" style={{backgroundColor: "#E0F9FC", padding: "0.2rem", width: "48px", height: "48px"}}>
                      <svg style={{color: "#00CFE8"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <div>
                        <p className="fw-bold text-secondary">8.549k <br /><span className="fw-normal">Customers</span></p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} xl={3}>
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle me-2 d-flex justify-content-center align-items-center" style={{backgroundColor: "#FCEAEA", padding: "0.2rem", width: "48px", height: "48px"}}>
                      <svg style={{color: "#EA5455"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      </div>
                      <div>
                        <p className="fw-bold text-secondary">1.423k <br /><span className="fw-normal">Products</span></p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} xl={3}>
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle me-2 d-flex justify-content-center align-items-center" style={{backgroundColor: "#E5F8ED", padding: "0.2rem", width: "48px", height: "48px"}}>
                        <svg style={{color: "#28C76F"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                      </div>
                      <div>
                        <p className="fw-bold text-secondary">$9745 <br /><span className="fw-normal">Revenue</span></p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={12} md={3}>
            <Card style={{borderRadius: "10px", height: "223px"}}>
              <div className="pt-3 ps-4">
                <p className="fw-bold text-secondary"><span className="fs-5">92.6k</span><br /><span className="fw-normal">Subscribers Gained</span></p>
              </div>
              <Chart options={optionsfirst} series={seriesfirst} type="area" width= "100%" height= "150px" />
            </Card>
          </Col>
          <Col xs={12} md={3} className="mt-4 mt-md-0">
            <Card style={{borderRadius: "10px", height: "223px"}}>
              <div className="pt-3 ps-4">
                <p className="fw-bold text-secondary"><span className="fs-5">97.5k</span><br /><span className="fw-normal">Orders Received</span></p>
              </div>
              <Chart options={optionsfirst} series={seriessecond} type="area" width= "100%" height= "150px" />
            </Card>
          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0">
          <Card style={{borderRadius: "10px", height: "223px"}} className="earning">
            <Card.Body>
              <Row>
                <div className="pt-3 ps-4 w-50">
                  <h5 className="text-secondary ps-2 mb-4">Earnings</h5>
                  <p className="fw-bold text-secondary ps-2"><span className="fw-normal pt-4">This month</span><br /><span className="fs-5">97.5k</span></p>
                  <p className="text-muted ps-2"><span className="fw-bold">68.2%</span> more earnings<br /> than last month.</p>
                </div>
                <div className="d-block d-lg-none" style={{height: "1px"}}>
                  <br />
                </div>
                <div className="w-50 pt-3">
                  <Chart options={optionsfirst} series={seriesthird} type="donut" width="250px" />
                </div>
              </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={12} md={8} xl={8}>
            <Card style={{borderRadius: "10px"}}>
              <Card.Body>
                  <div className="pt-3 ps-4">
                    <h5 className="text-secondary ps-2 mb-4">Revenue Report</h5>
                  </div>
                  <Chart className="revenue" options={optionssecond} series={seriessecond} type="bar" height= "245px" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{borderRadius: "10px"}} className="mt-4 mt-md-0">
              <Card.Body>
                  <div className="pt-2 text-center">
                    <h5 className="text-secondary fs-3 fw-bold">$25,852</h5>
                    <p className="text-secondary mb-1"><span className="fw-bold">Budget: </span>$25000</p>
                    <Button>Increase Budget</Button>
                  </div>
                  <Chart options={optionsfirst} series={seriesfourth} type="line" width= "100%" height= "193px" />
              </Card.Body>
            </Card>
          </Col>
          </Row>

          <Row className="pb-5">
          <Col xs={12} md={4}>
            <Card className="pt-3 pt-lg-5 ps-4 text-secondary" style={{borderRadius: "10px", height: "350px"}}>
              <Card.Title>Browser States</Card.Title>
              <Card.Body>
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <img className="rounded-circle me-2" src={Chrome} alt="Browser" />
                    <h6 className="align-self-center mb-0">Google Chrome</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1">54.4%</div>
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <img className="rounded-circle me-2" src={Mozilla} alt="Browser" />
                    <h6 className="align-self-center mb-0">Mozilla Firefox</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1">2.1%</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <img className="rounded-circle me-2" src={Safari} alt="Browser" />
                    <h6 className="align-self-center mb-0">Apple Safari</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1">0.6%</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <img className="rounded-circle me-2" src={Explorer} alt="Browser" />
                    <h6 className="align-self-center mb-0">Internet Explorer</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1">1.3%</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <img className="rounded-circle me-2" src={Opera} alt="Browser" />
                    <h6 className="align-self-center mb-0">Opera Mini</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1">8.4%</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="pt-3 pt-lg-5 text-secondary mt-4 mt-md-0" style={{borderRadius: "10px", height: "350px"}}>
            <Card.Title className="ps-4">Goal Overview</Card.Title>
              <Card.Body>
                <Chart options={optionsfirst} series={seriesfifth} type="donut" width= "100%" height= "170px" />
                <div className="text-center">Goals Completed <span className="fw-bold fs-4">768,617</span> <br /> Goals In Progress <span className="fw-bold fs-4">13,561</span></div>
                </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="pt-3 pt-lg-5 ps-4 text-secondary mt-4 mt-md-0" style={{borderRadius: "10px", height: "350px"}}>
              <Card.Title>Transactions</Card.Title>
              <Card.Body>
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                    <svg className="rounded-circle me-2" style={{color: "#7367F0", backgroundColor: "#EEEDFD", padding: "0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline></svg>                    
                    <h6 className="align-self-center mb-0">Wallet</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1 text-danger">-$74</div>
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                  <svg className="rounded-circle me-2" style={{color: "#7367F0", backgroundColor: "#EEEDFD", padding: "0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <h6 className="align-self-center mb-0">Bank Transfer</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1 text-success">+$5669</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                  <svg className="rounded-circle me-2" style={{color: "#7367F0", backgroundColor: "#EEEDFD", padding: "0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <h6 className="align-self-center mb-0">Paypal</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1 text-success">+$6785</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                  <svg className="rounded-circle me-2" style={{color: "#7367F0", backgroundColor: "#EEEDFD", padding: "0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    <h6 className="align-self-center mb-0">Mastercard</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1 text-danger">-$456</div>
                  </div>
                </div>
                
                <div className="mb-3 d-flex justify-content-space-between align-items-center">
                  <div className="w-100 d-flex align-items-start">
                  <svg className="rounded-circle me-2" style={{color: "#7367F0", backgroundColor: "#EEEDFD", padding: "0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>                    <h6 className="align-self-center mb-0">Transfer</h6>
                  </div>
                  <div className="d-flex align-items-center" style={{position: "relative"}}>
                    <div className="fw-bold me-1 text-success">+$712</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
