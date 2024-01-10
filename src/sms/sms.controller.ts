import { Body, Controller, Post } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('send/otp')
  async sendsms(@Body('to') to: string, @Body('otp') otp: number) {
    try {
      const result = await this.smsService.sendSmsWithOtp(to, otp);
      return result;
    } catch (error) {
      console.error('Error sending sms:', error);
      throw new Error('Failed to send sms.');
    }
  }
}
