import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { EmailController } from './email/email.controller';
import { SmsController } from './sms/sms.controller';

@Module({
  imports: [EmailModule, SmsModule],
  controllers: [EmailController, SmsController],
  providers: [AppService],
})
export class AppModule {}
