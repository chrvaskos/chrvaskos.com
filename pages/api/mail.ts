import { Request, Response } from 'express'
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req: Request, res: Response) => {
  const body = await JSON.parse(req.body)

  const message = `
    Name: ${body.fullname}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

  const data = {
    to: 'chrvaskos@gmail.com',
    from: 'chrvaskos@gmail.com',
    subject: 'New web form message',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  await mail.send(data)

  res.status(200).json({ status: 'OK' })
}
