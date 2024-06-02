import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'

const icons = {
  facebook: faFacebook,
  twitter: faTwitter,
  linkedin: faLinkedin
}

const SocialButton = ({ platform }) => {
  return (
    <Button variant='outline-success' className='mx-1'>
      <FontAwesomeIcon icon={icons[platform]} />
    </Button>
  )
}

export default SocialButton
