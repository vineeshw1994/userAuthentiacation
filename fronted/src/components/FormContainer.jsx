import { Children } from "react"
import { Container,Row,Col } from "react-bootstrap"
const FormContainer = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
      <Col xs={12} md={6} className="card p-5">  
      {Children}
      </Col>
      </Row>  
    </Container>
  )
}

export default FormContainer