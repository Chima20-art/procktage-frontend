export default function handler(req, res) {
    try {
        if (req.method == 'POST') {
            const { email, name, message } = JSON.parse(req.body)
            if (email) {
                const Mailjet = require('node-mailjet')
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
                                    Email: 'pilot@mailjet.com',
                                    Name: 'Mailjet Pilot',
                                },
                                To: [
                                    {
                                        Email: 'passenger1@mailjet.com',
                                        Name: 'passenger 1',
                                    },
                                ],
                                Subject: 'Your email flight plan!',
                                TextPart:
                                    'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
                                HTMLPart:
                                    '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
                            },
                        ],
                    })

                request
                    .then((result) => {
                        console.log(result.body)
                    })
                    .catch((err) => {
                        console.log(err.statusCode)
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
