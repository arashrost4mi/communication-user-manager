import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send/marketing')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
  ) {
    try {
      const result = await this.emailService.sendEmail(to, subject, text);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email.');
    }
  }

  @Post('send/otp')
  async sendEmailWithOtp(@Body('to') to: string, @Body('otp') otp: number) {
    try {
      const result = await this.emailService.sendEmailWithOtp(to, otp);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email.');
    }
  }
}
