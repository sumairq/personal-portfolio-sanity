import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

import "./Footer.scss";

const Footer = () => {
	const [state, handleSubmit] = useForm("mwkjpklk");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	return (
		<>

			<h2 className='head-text'>Let's talk about your project</h2>


			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img
						src={images.email}
						alt='email'
					/>
					<a
						href='mailto:sumairqaisar992@gmail.com'
						className='p-text'
					>
						sumairqaisar992@gmail.com
					</a>
				</div>
				<div className='app__footer-card'>
					<img
						src={images.mobile}
						alt='mobile'
					/>
					<a
						href='tel: (+92) 3169204842'
						className='p-text'
					>
						PK(+92) 3169204842
					</a>
				</div>
			</div>
			{!state.succeeded ? (
				<form
					className='app__footer-form app__flex'
					onSubmit={handleSubmit}
				>
					<div className='app__flex'>
						<input
							className='p-text'
							type='text'
							placeholder='Your Name'
							name='name'
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							type='email'
							placeholder='Your Email'
							name='email'
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className='p-text'
							placeholder='Your Message'
							value={message}
							name='message'
							onChange={handleChangeInput}
						/>
					</div>
					<button
						type='submit'
						className='p-text'
					>
						{state.submitting ? "Sending" : "Send Message"}
					</button>
				</form>
			) : (
				<div>
					<h3 className='head-text'>Thank you for getting in touch</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
