import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Table,
  CardBody,
  CardHeader,
  BreadcrumbItem,
  Container,
  Breadcrumb,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import Menu from "../../components/Menu";

import UserService from "../../http/service/UserService";
import { email } from "../../config/const";

class List extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      data: []
    };
  }

  // componentDidMount() {
  //   UserService.findAll().then(data =>
  //     this.setState({
  //       data: data.filter(e => e.email !== email())
  //     })
  //   );
  // }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {/* <Menu /> */}
        <Container>
          <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Tecnicos</BreadcrumbItem>
              </Breadcrumb>
              <Card>
                <CardHeader>
                  <CardTitle>Tecnicos: Informe</CardTitle>
                  <Row>
                    <Col xs="6">
                      <CardText>Listado de Infomes</CardText>
                    </Col>
                    <Col>
                      <Link to="/Tecnico/nuevoinforme" id="TooltipPerson">
                        <Button color="primary">
                          <FontAwesomeIcon icon="add" />
                          Nuevo Informe (Personas)
                        </Button>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="/Tecnico/nuevoinforme" id="TooltipInstall">
                        <Button color="primary">
                          <FontAwesomeIcon icon="add" />
                          Nuevo Informe (instalacion)
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Nav tabs>
                    <NavItem color="dark">
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        Aprobadas(Personas)
                      </NavLink>
                    </NavItem>
                    <NavItem color="dark">
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Aprobadas(Instalaciones)
                      </NavLink>
                    </NavItem>
                    <NavItem color="dark">
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "3"
                        })}
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        Rechazadas(Personas)
                      </NavLink>
                    </NavItem>
                    <NavItem color="dark">
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "4"
                        })}
                        onClick={() => {
                          this.toggle("4");
                        }}
                      >
                        Rechazadas(Instalaciones)
                      </NavLink>
                    </NavItem>
                    <NavItem color="dark">
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "5"
                        })}
                        onClick={() => {
                          this.toggle("5");
                        }}
                      >
                        Pendientes(Personas)
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Table size="sm" striped hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Supervisor</th>
                            <th>Prevencionista</th>
                            <th>Empresa</th>
                            <th>Instalacion</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(e => (
                            <tr key={e.id}>
                              <th scope="row">
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="link" size="sm">
                                    {e.id}
                                  </Button>
                                </Link>
                              </th>
                              <td>{e.date}</td>
                              <td>{e.supervisor}</td>
                              <td>{e.preventionist}</td>
                              <td>{e.business}</td>
                              <td>{e.installation}</td>
                              <td>
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="primary" size="sm" outline>
                                    ver :<FontAwesomeIcon icon="eye" />
                                  </Button>
                                </Link>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="2">
                      <Table size="sm" striped hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Supervisor</th>
                            <th>Prevencionista</th>
                            <th>Empresa</th>
                            <th>Instalacion</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(e => (
                            <tr key={e.id}>
                              <th scope="row">
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="link" size="sm">
                                    {e.id}
                                  </Button>
                                </Link>
                              </th>
                              <td>{e.date}</td>
                              <td>{e.supervisor}</td>
                              <td>{e.preventionist}</td>
                              <td>{e.business}</td>
                              <td>{e.installation}</td>
                              <td>
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="primary" size="sm" outline>
                                    ver :<FontAwesomeIcon icon="eye" />
                                  </Button>
                                </Link>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="3">
                      <Table size="sm" striped hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Supervisor</th>
                            <th>Prevencionista</th>
                            <th>Empresa</th>
                            <th>Instalacion</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(e => (
                            <tr key={e.id}>
                              <th scope="row">
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="link" size="sm">
                                    {e.id}
                                  </Button>
                                </Link>
                              </th>
                              <td>{e.date}</td>
                              <td>{e.supervisor}</td>
                              <td>{e.preventionist}</td>
                              <td>{e.business}</td>
                              <td>{e.installation}</td>
                              <td>
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="primary" size="sm" outline>
                                    ver :<FontAwesomeIcon icon="eye" />
                                  </Button>
                                </Link>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="4">
                      <Table size="sm" striped hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Supervisor</th>
                            <th>Prevencionista</th>
                            <th>Empresa</th>
                            <th>Instalacion</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(e => (
                            <tr key={e.id}>
                              <th scope="row">
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="link" size="sm">
                                    {e.id}
                                  </Button>
                                </Link>
                              </th>
                              <td>{e.date}</td>
                              <td>{e.supervisor}</td>
                              <td>{e.preventionist}</td>
                              <td>{e.business}</td>
                              <td>{e.installation}</td>
                              <td>
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="primary" size="sm" outline>
                                    ver :<FontAwesomeIcon icon="eye" />
                                  </Button>
                                </Link>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="5">
                      <Table size="sm" striped hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Supervisor</th>
                            <th>Prevencionista</th>
                            <th>Empresa</th>
                            <th>Instalacion</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(e => (
                            <tr key={e.id}>
                              <th scope="row">
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="link" size="sm">
                                    {e.id}
                                  </Button>
                                </Link>
                              </th>
                              <td>{e.date}</td>
                              <td>{e.supervisor}</td>
                              <td>{e.preventionist}</td>
                              <td>{e.business}</td>
                              <td>{e.installation}</td>
                              <td>
                                <Link to={`/informe/detalle/${e.id}`}>
                                  <Button color="primary" size="sm" outline>
                                    ver :<FontAwesomeIcon icon="eye" />
                                  </Button>
                                </Link>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default List;
