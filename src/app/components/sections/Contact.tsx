'use client'
import { TextField, Button, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CheckIcon from '@mui/icons-material/Check'
import emailjs from '@emailjs/browser'
import { Ref, useRef, useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import AnimatedSection from '../utils/AnimatedSection'

const validationSchema = yup.object({
	name: yup
		.string()
		.required('Name is required.')
		.min(2, 'Name should be at least 2 characters')
		.max(30, 'Name should be less than 30 characters.')
		.matches(/^\D+$/, {
			message: 'Name should not contain numbers.',
		}),
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required.'),
	message: yup
		.string()
		.min(10, 'Message should be at least 10 characters')
		.max(10000, 'Message should be less than 10,000 characters')
		.required('Message is required'),
})

const Contact = () => {
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	const ref: Ref<HTMLFormElement | null> = useRef(null)

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: (data, { resetForm }) => {
			setLoading(true)

			emailjs
				.sendForm(
					'service_bh6e8td',
					'template_216pnnj',
					ref.current ?? '',
					'O1qSorvnoI16YFMqs'
				)
				.then(
					(result) => {
						console.log(result.text)
						setSuccess(true)
						setLoading(false)
						resetForm()
					},
					(error) => {
						console.log(error.text)
						setSuccess(false)
						setLoading(false)
					}
				)
		},
	})

	const sendButtonAnimation = () => {
		if (loading) {
			return <CircularProgress size='1rem' />
		} else if (success) {
			return <CheckIcon />
		} else {
			return <SendIcon />
		}
	}

	const renderSubmitButtonText = () => {
		if (loading) {
			return 'Sending'
		} else if (success) {
			return 'Sent'
		} else {
			return 'Send'
		}
	}

	return (
		<AnimatedSection id='contact'>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Contact Me
			</h4>
			<div className='w-full mx-auto pb-16'>
				<form
					ref={ref}
					onSubmit={formik.handleSubmit}
					className='flex flex-col gap-16 w-full my-auto h-auto lg:w-[55%] lg:mx-0 bg-[#212121] px-5 py-6 lg:px-14 lg:py-16 rounded-lg justify-between'
				>
					<TextField
						label='What is your name?'
						name='name'
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
						label='What is your email?'
						name='email'
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
						label='What would you like to say?'
						name='message'
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
						variant='outlined'
						endIcon={sendButtonAnimation()}
						type='submit'
						color={success ? 'success' : 'primary'}
						className='h-14'
						disabled={loading}
					>
						{renderSubmitButtonText()}
					</Button>
				</form>
			</div>
		</AnimatedSection>
	)
}

export default Contact
