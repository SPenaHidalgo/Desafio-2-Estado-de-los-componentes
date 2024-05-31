import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = ({ handleAlert }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|cl|org|net|edu|gov|mil|co|info|biz|me|io|dev)$/i
    return emailPattern.test(String(email).toLowerCase())
  }

  const validateName = (name) => {
    const isValidNombre = /^[a-zA-Z0-9]{3,}$/
    return isValidNombre.test(String(name).toLowerCase())
  }

  const validatePassword = (password) => {
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/
    return isValidPassword.test(String(password))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      handleAlert('Todos los campos son obligatorio', 'danger')
      return
    }

    if (!validateName(name)) {
      handleAlert('El nombre debe tener más de 3 caracteres', 'danger')
      setName('')
      return
    }

    if (!validateEmail(email)) {
      handleAlert('El formato del email es incorrecto', 'danger')
      setEmail('')
      return
    }

    if (!validatePassword(password)) {
      handleAlert('La contraseña debe ser de 6 caracteres, contener una mayuscula y un número', 'danger')
      setPassword('')
      return
    }

    if (password !== confirmPassword) {
      handleAlert('Las contraseñas no coinciden', 'danger')
      setPassword('')
      setConfirmPassword('')
      return
    }

    handleAlert('Registro exitoso', 'success')
  }

  return (
    <Form className='bg-dark p-5' onSubmit={handleSubmit} noValidate>
      <Form.Group className='mb-3'>
        <Form.Label className='text-white'>Nombre</Form.Label>
        <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label className='text-white'>Email</Form.Label>
        <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label className='text-white'>Contraseña</Form.Label>
        <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label className='text-white'>Confirmar Contraseña</Form.Label>
        <Form.Control type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <div className='d-grid gap-2 pt-2'>
        <Button variant='success' type='submit'>
          Registrarse
        </Button>
      </div>
    </Form>
  )
}

export default Formulario
