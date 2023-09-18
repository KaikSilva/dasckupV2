import Container from "../../../components/Container"
import {Row,Col, Card} from "react-bootstrap";

function CreateClient(){
    return(
        <Container>
            <div className="content-wrapper">
                <div className="container-fluid">
    

                    <Row>
                        <Col sm="6">
                            <Card>
                                <div className="card-header mb-3">
                                    <h5 className="card-title">
                                    Cadastrar Cliente
                                    </h5>
                                </div>


                                <div className="card-body">
                                    <Row className="mb-3">
                                        <Col className="mb-2" sm="6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Nome <code>*</code></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </Col>
                                        <Col className="mb-2" sm="6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Sobrenome <code>*</code></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col className="mb-2" sm="6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Celular <code>*</code></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </Col>
                                        <Col className="mb-2" sm="6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Telefone </label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col sm="12">
                                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail <code>*</code></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">O endereço de email para contato</div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-5">
                                        <Col sm="12">
                                            <button type="button" className="btn btn-primary">Cadastrar</button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default CreateClient;