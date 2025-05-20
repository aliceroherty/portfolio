"use client";

import { TextField, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { slideInLeft } from '../utils/motion';
import { Element } from 'react-scroll';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required.')
        .min(2, 'Name should be at least 2 characters')
        .max(30, 'Name should be less than 30 characters.')
        .matches(/^\D+$/, {
            message: 'Name should not contain numbers.',
        }),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required.'),
    message: yup
        .string('Enter a message')
        .min(10, 'Message should be at least 10 characters')
        .max(10000, 'Message should be less than 10,000 characters')
        .required('Message is required'),
});

const Contact = () => {
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const ref = useRef();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (data, { resetForm }) => {
            setLoading(true);

            emailjs
                .sendForm(
                    'service_bh6e8td',
                    'template_216pnnj',
                    ref.current,
                    'O1qSorvnoI16YFMqs'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setSuccess(true);
                        setLoading(false);
                        resetForm();
                    },
                    (error) => {
                        console.log(error.text);
                        setSuccess(false);
                        setLoading(false);
                    }
                );
        },
    });

    return (
        <Element name="contact" className="w-full">
            <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full pb-16 text-left mt-2"
                id="contact"
            >
                <h4 className="lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left">
                    Contact Me
                </h4>
                <form
                    ref={ref}
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-16 w-full my-auto h-auto lg:w-[55%] lg:mx-0 bg-[#212121] px-5 py-6 lg:px-14 lg:py-16 rounded-lg justify-between"
                >
                    <TextField
                        label="What is your name?"
                        name="name"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        label="What is your email?"
                        name="email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        label="What would you like to say?"
                        name="message"
                        fullWidth
                        multiline
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                        }
                        helperText={
                            formik.touched.message && formik.errors.message
                        }
                    />
                    <Button
                        variant="outlined"
                        endIcon={
                            loading ? (
                                <CircularProgress size="1rem" />
                            ) : success ? (
                                <CheckIcon />
                            ) : (
                                <SendIcon />
                            )
                        }
                        type="submit"
                        color={success ? 'success' : 'primary'}
                        className="h-14"
                        disabled={loading}
                    >
                        {loading ? 'Sending' : success ? 'Sent' : 'Send'}
                    </Button>
                </form>
            </motion.div>
        </Element>
    );
};

export default Contact;
