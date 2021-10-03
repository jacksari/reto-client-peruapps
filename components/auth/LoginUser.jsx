import React, {useContext} from 'react';
import Link from "next/link";
import authContext from "../../context/auth/authContext";
import {useFormik} from "formik";
import * as Yup from "yup";

function LoginUser() {
    const { login, mensaje } = useContext(authContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6,'El password debe contener al menos 6 caracteres'),
        }),
        onSubmit: (valores) => {
            console.log('enviando form', valores)
            login(valores)
        }

    })
    return (
        <form
            onSubmit={formik.handleSubmit}
        >
            <h5 style={{textAlign: 'center', color: '#f02e5e'}}>{mensaje}</h5>
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

            <div className="form-group form-btn">
                <button className="btn" type={"submit"}>Iniciar sesión</button>
            </div>
            <div className="form-group form-link">
                <p>No tienes cuenta?</p>
                <Link href="/register">
                    <a>Registrarme</a>
                </Link>
            </div>
        </form>
    );
}

export default LoginUser;
