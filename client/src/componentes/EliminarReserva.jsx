import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

const EliminarReserva = ({ reservaId, successCallback }) => {

    const EliminarReserva = (reservaId) => {

        Swal.fire({
            title: "Seguro que quieres eliminarlo?",
            text: "Estas a punto de eliminar una reserv.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/reserva/${reservaId}`)
                    .then(res => {
                        console.log(res)
                        successCallback(reservaId)
                    })
            }
        });
    }

    return (
        <button onClick={() => EliminarReserva(reservaId)} className="btn btn-outline-success btn-sm">Eliminar reserva</button>
    )
}

EliminarReserva.propTypes = {
    petId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default EliminarReserva