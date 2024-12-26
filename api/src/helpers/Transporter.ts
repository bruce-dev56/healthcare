import nodemailer from 'nodemailer';
import config from '../config';

export const Transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: config.gmail_app_Email,
        pass: config.emailPass
    }
});
