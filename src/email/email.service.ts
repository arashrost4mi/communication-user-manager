import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailServiceInterface } from './email-service.interface';

@Injectable()
export class EmailService implements EmailServiceInterface {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arashrost4mi@gmail.com',
        pass: 'tmcdvvfttjiynfur',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    try {
      const mailOptions = {
        from: 'arashrost4mi@gmail.com',
        to,
        subject,
        text,
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  }

  async sendEmailWithOtp(to: string, otp: number) {
    try {
      const subject = 'Your OTP Code';
      const text = `Your OTP code is ${otp}. Please use it to verify your identity.`;

      await this.sendEmail(to, subject, text);
      return { success: true, message: `sent to ${to}. otp is ${otp}` };
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  }
}
