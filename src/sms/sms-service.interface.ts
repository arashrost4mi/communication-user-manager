export interface SmsServiceInterface {
  sendSmsWithOtp(
    to: string,
    otp: number,
  ): Promise<{
    success: boolean;
    data: string;
    message: string;
  }>;
}
