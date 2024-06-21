import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'ialexsilva.dev <contato@ialexsilva.dev>',
      to: 'eu@ialexsilva.dev',
      replyTo: data.email,
      subject: `${data.name} - via ialexsilva.dev`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
