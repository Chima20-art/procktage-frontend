export default function a(req, res) {
    try {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
            secure: true,
        })
        const mailData = {
            from: 'procktage@gmail.com',
            to: 'procktage@gmail.com, chaimaemichich@gmail.com',
            subject: `Nouvelle demande de devis: ${req.body.name}`,
            text: req.body.message + ' | Envoyé par : ' + req.body.email,
            html: `<div>Vous avez reçu une nouvelle demande devis</div><p>
     Nom de l'entreprise: ${req.body.name}</p>
     <p> Nom du responsable: ${req.body.nomDuResponsable}</p>
     <p> Email: ${req.body.email}</p>
     <p> Message: ${req.body.message}</p>
     `,
        }
        console.log(mailData)
        transporter.sendMail(mailData)
        res.status(200).json({
            status: 'ok',
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'error',
        })
    }
}
