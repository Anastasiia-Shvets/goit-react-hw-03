import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './ContactForm.module.css'


const ContactForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Required'),
                number: Yup.string()
                    .min(3, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            <Form className={style.formConteiner}>
                <div className={style.inputField}>
                    <label htmlFor="name" className={style.lableName}>Name</label>
                    <Field type="text" name="name" className={style.inputFormName} />
                    
                    <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className={style.inputField}>
                    <label htmlFor="number" className={style.lableNumber}>Number</label>
                    <Field type="text" name="number" className={style.inputFormNumber} />
                    
                    <ErrorMessage name="number" component="div" className="error" />
                </div>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
