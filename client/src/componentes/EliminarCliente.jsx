import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

const EliminarCliente = ({ clienteId, successCallback }) => {

    const EliminarCliente = (clienteId) => {

        Swal.fire({
            title: "Seguro que quieres eliminarlo?",
            text: "Estas a punto de eliminar un cliente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/cliente/${clienteId}`)
                    .then(res => {
                        console.log(res)
                        successCallback(clienteId)
                    })
            }
        });
    }

    return (
        <button onClick={() => EliminarCliente(clienteId)} className="btn btn-outline-success btn-sm">Eliminar cliente</button>
    )
}

EliminarCliente.propTypes = {
    petId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default EliminarCliente