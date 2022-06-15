import React, {useState} from "react";
import Button from 'react-bootstrap/Button'

export default function SearchForm(props){

    const estadoInicialForm = {
        departureAP: '',
        arrivalAP: '',
        departureDate: ''
    };

    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);

    const gestionarCamposForm = event => { 
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        cambiarEstadoForm({...estadoForm, [nameInput]:valueInput}); 
    }

    const onSubmitForm = ev => { 
        ev.preventDefault();
        props.enviar(estadoForm); 
    }

    return(
        <>
        <h3>Where next?</h3>
        <form onSubmit={onSubmitForm}> 

            <div className="mb-3">
                <label htmlFor="departAP" className="form-label">Departure airport</label>
                <input type="text" class="form-control" id="departAP" 
                name="departureAP" value={estadoForm.departureAP} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="arrivAP" className="form-label">Arrival airport</label>
                <input type="text" class="form-control" id="arrivAP" 
                name="arrivalAP" value={estadoForm.arrivalAP} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="departDate" className="form-label">Pick a date</label>
                <input type="date" class="form-control" id="departDate" 
                name="departureDate" value={estadoForm.departureDate} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
            <Button type="submit" className="btn btn-primary" variant="dark">SEARCH FLIGHTS</Button>
            </div>

      </form>
      </>
    );

}