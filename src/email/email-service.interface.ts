export interface EmailServiceInterface {
  sendEmail(to: string, subject: string, text: string): Promise<void>;

  sendEmailWithOtp(
    to: string,
    otp: number,
  ): Promise<{
    success: boolean;
    message: string;
  }>;
}
