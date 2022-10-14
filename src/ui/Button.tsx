import { Container } from '../styles/button'

interface Props {
  text: string
}

export const Button: React.FC<Props> = ({ text = 'Button' }) => {
  return <Container>{text}</Container>
}
