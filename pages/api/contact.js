export default function a(req, res) {
    try {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: 'michichchaimae@gmail.com',
                pass: 'orkg supg egvr uhgg',
            },
            secure: true,
        })
        const mailData = {
            from: 'michichchaimae@gmail.com',
            to: 'michichchaimae@gmail.com',
            subject: `Nouvelle demande de devis: ${req.body.name}`,
            text: req.body.message + ' | Envoyé par : ' + req.body.email,
            html: `<div>vous avez reçu une nouvelle demande devis:</div><p>
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
