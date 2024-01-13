import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SmsServiceInterface } from './sms-service.interface';

@Injectable()
export class SmsService implements SmsServiceInterface {
  private apiUrl = 'https://api.kavenegar.com/v1';
  private apiKey = 'FakeApiKey123';

  constructor() {}

  async sendSmsWithOtp(to: string, otp: number) {
    try {
      const endpoint = '/verify/lookup.json';
      const url = `${this.apiUrl}/${this.apiKey}/${endpoint}?receptor=${to}&token=${otp}&template=smsOtp`;

      const response = await axios.post(url);
      return {
        success: true,
        data: response.data,
        message: 'SMS sent successfully.',
      };
    } catch (error) {
      console.error(
        'Error sending SMS:',
        error.response ? error.response.data : error.message,
      );
      throw new Error('Failed to send SMS.');
    }
  }
}
