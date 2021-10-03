import React, { useContext } from 'react';
import Link from "next/link";
import { useFormik }  from 'formik';
import * as Yup from 'yup';
import authContext from "../../context/auth/authContext";

function RegisterAuth() {
    const { register, mensaje } = useContext(authContext);
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            birthday: '',
            place: 1,
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastname: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6,'El password debe contener al menos 6 caracteres'),
            birthday: Yup.string().required('El cumpleaños es obligatorio'),
            place: Yup.string().required('La sede es obligatorio'),
            phone: Yup.string().required('El celular es obligatorio'),
        }),
        onSubmit: (valores) => {
            //console.log('enviando form', valores)
            register(valores, 'login')
        }

    })
    return (
        <form
            onSubmit={formik.handleSubmit}
        >
            <h5 style={{textAlign: 'center', color: '#f02e5e'}}>{mensaje}</h5>
            <div className="form-group">
                <label>Nombres:</label>
                <input
                    type="text"
                    placeholder="Ingrese sus nombres aquí"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.name && formik.errors.name ? (
                        <p className="error-input">{formik.errors.name}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Apellidos:</label>
                <input
                    type="text"
                    placeholder="Ingrese sus apellidos aquí"
                    id="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.lastname && formik.errors.lastname ? (
                        <p className="error-input">{formik.errors.lastname}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Ingrese su email aquí"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.email && formik.errors.email ? (
                        <p className="error-input">{formik.errors.email}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Ingrese su password aquí"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.password && formik.errors.password ? (
                        <p className="error-input">{formik.errors.password}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Celular:</label>
                <input
                    type="text"
                    placeholder="Ingrese su teléfono aquí"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.phone && formik.errors.phone ? (
                        <p className="error-input">{formik.errors.phone}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Fecha de nacimiento:</label>
                <input
                    type="date"
                    placeholder="Ingrese su teléfono aquí"
                    id="birthday"
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.birthday && formik.errors.birthday ? (
                        <p className="error-input">{formik.errors.birthday}</p>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label>Sedes:</label>
                <select
                        name="place"
                        id="place"
                        value={formik.values.place}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                >
                    <option value={1}>Miraflores</option>
                    <option value={2}>La Molina</option>
                    <option value={3}>San Isidro</option>
                </select>
                {
                    formik.touched.place && formik.errors.place ? (
                        <p className="error-input">{formik.errors.place}</p>
                    ) : null
                }
            </div>
            <div className="form-group form-btn">
                <button className="btn" type={"submit"}>Register</button>
            </div>
            <div className="form-group form-link">
                <p>Ya tienes cuenta?</p>
                <Link href="/">
                    <a>Login</a>
                </Link>
            </div>
        </form>
    );
}

export default RegisterAuth;
