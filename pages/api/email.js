import { Klotty } from 'klotty'
const klotty = new Klotty(process.env.KLOTTY_API_KEY)
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await klotty.sendEmail({
      from: 'contato@ialexsilva.dev',
      to: 'ialexsilva@outlook.com',
      subject: `${data.name} - via ialexsilva.dev`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
