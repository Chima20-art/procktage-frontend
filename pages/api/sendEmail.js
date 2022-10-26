export default function handler(req, res) {
    try {
        if (req.method == 'POST') {
            const { email, name, message } = JSON.parse(req.body)
            //console.log('email ', email)
            if (email) {
                const Mailjet = require('node-mailjet')
                console.log(
                    'process.env.MJ_APIKEY_PUBLIC',
                    process.env.MJ_APIKEY_PUBLIC
                )
                console.log(
                    'process.env.MJ_APIKEY_PRIVATE',
                    process.env.MJ_APIKEY_PRIVATE
                )
                const mailjet = Mailjet.apiConnect(
                    process.env.MJ_APIKEY_PUBLIC,
                    process.env.MJ_APIKEY_PRIVATE
                )
                const request = mailjet
                    .post('send', { version: 'v3.1' })
                    .request({
                        Messages: [
                            {
                                From: {
                                    Email: 'no-reply@procktage.ma',
                                    Name: 'Procktage Website',
                                },
                                To: [
                                    {
                                        Email: 'chaimaemichich@gmail.com',
                                        Name: 'Chiame Michich',
                                    },
                                ],
                                Subject: 'A Contact Request!',
                                TextPart:
                                    'Hi , we just got a new contact request',
                                HTMLPart: `<h3>name : ${name}</h3>
                                    <br/>
                                    <h3>email : ${email}</h3>
                                    <br/>
                                    <h3>message : ${message}</h3>
                                    `,
                            },
                        ],
                    })

                request
                    .then((result) => {
                        //console.log(result.body)
                        return res.status(200).json({ status: true })
                    })
                    .catch((err) => {
                        //console.log(err)
                        return res.status(200).json({
                            status: false,
                        })
                    })
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Email required',
                })
            }
        } else {
            return res.status(200).json({
                status: false,
                message: 'Wrong Method',
            })
        }
    } catch (error) {
        console.log('errr in sendEMail', error)
        return res.status(200).json({ status: false, message: error })
    }
}
