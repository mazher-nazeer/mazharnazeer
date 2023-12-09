import nodemailer from 'nodemailer'
export default async function ContactAPI(req, res) {
    const { name, email, phone, message } = req.body

    const user = process.env.USER_ID
    const pass = process.env.USER_PASS

    

    const data = { name, email, phone }


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'Gmail',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: user,
            pass: pass,
        },
    });

    try {
        

        const mail = await transporter.sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
            <h3>Name: ${name}</h3>
            <h3>Emil: ${email}</h3>
            <h3>Contact: ${phone}</h3>
            <h3>Message: ${message}</h3>`
        })
        console.log('Message sent: ', mail.messageId);

        return res.status(200).json({ message: 'success' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Your message was not sent!', Error: error })
    }

}