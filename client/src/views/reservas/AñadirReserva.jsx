import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const AñadirReserva = () => {
    const navegate = useNavigate();

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es requerido'),
        apellido: Yup.string().required('El apellido es requerido'),
        ci: Yup.number().required('La CI es requerida'),
        email: Yup.string().email('Formato de correo inválido'),
        empresa: Yup.string(),
        fechaInicio: Yup.date().required('La fecha de inicio es requerida'),
        precio: Yup.number().required('El precio es requerido').positive('El precio debe ser positivo'),
        fechaFin: Yup.date().required('La fecha de fin es requerida')
            .when('fechaInicio', (fechaInicio, schema) => {
                return schema.min(fechaInicio, 'La fecha de fin debe ser posterior a la fecha de inicio');
            }),
    });


    const handleSubmit =  (Reserva, { setSubmitting }) => {
        try {
            const response =  axios.post('http://localhost:8000/api/reserva', Reserva);
            console.log(response.data.Reserva);
            navegate("/");
            Swal.fire({
                icon: "success",
                title: "¡Genial!",
                text: "¡Agregaste una Reserva!"
            });
        } catch (err) {
            console.error("Error al agregar la reserva:", err);
            // Manejo de errores
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{
                nombre: '',
                apellido: '',
                ci: '',
                email: '',
                empresa: '',
                fechaInicio: '',
                precio: '',
                fechaFin: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1>Reservas</h1>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <h3>Datos del cliente</h3>
                            <hr />
                            <div>
                                <ErrorMessage name="nombre" component="div" className="text-danger" />
                                <Field type="text" className="form-control mt-3" name="nombre" placeholder="Nombre" />
                            </div>
                            <div>
                                <ErrorMessage name="apellido" component="div" className="text-danger" />
                                <Field type="text" className="form-control mt-3" name="apellido" placeholder="Apellido" />
                            </div>
                            <div>
                                <ErrorMessage name="ci" component="div" className="text-danger" />
                                <Field type="number" className="form-control mt-3" name="ci" placeholder="CI" />
                            </div>
                            <div>
                                <ErrorMessage name="email" component="div" className="text-danger" />
                                <Field type="email" className="form-control mt-3" name="email" placeholder="Correo electrónico" />
                            </div>
                            <div>
                                <ErrorMessage name="empresa" component="div" className="text-danger" />
                                <Field type="text" className="form-control mt-3" name="empresa" placeholder="Empresa" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Datos de hospedaje</h3>
                            <hr />
                            <div>
                                <ErrorMessage name="fechaInicio" component="div" className="text-danger" />
                                <Field type="date" className="form-control mt-3" name="fechaInicio" />
                            </div>
                            <div>
                                <ErrorMessage name="fechaFin" component="div" className="text-danger" />
                                <Field type="date" className="form-control mt-3" name="fechaFin" />
                            </div>
                            <div>
                                <ErrorMessage name="precio" component="div" className="text-danger" />
                                <Field type="number" className="form-control mt-3" name="precio" placeholder="Precio" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                        Añadir Reserva
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AñadirReserva;
