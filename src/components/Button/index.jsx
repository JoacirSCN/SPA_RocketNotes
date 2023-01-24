import { Container } from './styles';

export function Button({ title, loading, ...rest}){
  return (
    <Container 
      type='button'
      disabled={loading  = false}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}