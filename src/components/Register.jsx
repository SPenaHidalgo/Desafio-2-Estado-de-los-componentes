import { useState } from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'
import { Container, Row, Col } from 'react-bootstrap'

const Register = () => {
  const [alert, setAlert] = useState({ message: '', type: '' })

  const handleAlert = (message, type) => {
    setAlert({ message, type })
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md='6'>
          <h1 className='text-center'>Registro</h1>
          <div className='d-flex justify-content-around my-3'>
            <SocialButton platform='facebook' />
            <SocialButton platform='twitter' />
            <SocialButton platform='linkedin' />
          </div>
          <Formulario handleAlert={handleAlert} />
          {alert.message && <Alert message={alert.message} type={alert.type} />}
        </Col>
      </Row>
    </Container>
  )
}

export default Register
