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
    <Button>
      <FontAwesomeIcon icon={icons[platform]} size='1x' />
    </Button>
  )
}

export default SocialButton
