import "./PromocionesPorId.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const PromocionesPorId = (props) => {
    const { imagen, nombre, numero, descripción, precio } = props.promocion

    return (
        <div className="promociones-id">
      <div class="col-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body>
        <Card.Title><h2>{nombre}</h2></Card.Title>
        <Card.Text>
        <p>{numero}</p>
            <p>{descripción}</p>
            <p>{precio}</p>
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
    )
}