import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c9f14774830ad9",
    pass: "471893712b9357"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Bauer <gabriel.bauer9@hotmail.com>',
      subject,
      html: body
    })
  }
}