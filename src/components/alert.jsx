import { Alert as BootstrapAlert } from 'react-bootstrap'

const Alert = ({ message, type }) => {
  return (
    <BootstrapAlert variant={type} className='mt-3'>
      {message}
    </BootstrapAlert>
  )
}

export default Alert
