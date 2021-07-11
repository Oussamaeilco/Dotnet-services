import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NodeMailerService {
  //nodemailer = require('nodemailer');
  /* transporter = this.nodemailer.createTransport({
    host: 'mail42.lwspanel.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: environment.emailUser, // user
      pass: environment.emailPwd, // password
    },
  });
  /*async send_msg() {
    let info = await this.transporter.sendMail({
      from: '"Dotnet Services" <support@dotnet-services.fr>', // sender address
      to: 'support@dotnet-services.fr', // list of receivers
      subject: 'Test Message', // Subject line
      text: 'Hello this is a test message.', // plain text body
    });
    console.log('Message sent: %s', info.messageId);
  }*/
  send_msg() {
    alert('test');
  }
}
