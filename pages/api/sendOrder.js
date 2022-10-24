import { client } from '../../lib/sanity'

export default async function sendOrder(req, res) {
    try {
        if (req.method == 'POST') {
            try {
                const { name, nomDuResponsable, telephone, email, message } =
                    JSON.parse(req.body)
                if (email) {
                    const doc = {
                        _type: 'demandes',

                        entrepriseName: name,
                        nomResponsable: nomDuResponsable,
                        email: email,
                        telephone: telephone,
                        message: message,
                    }

                    const sanityDoc = await client.create(doc)
                    return res.status(200).json({ status: true })
                } else {
                    res.status(200).json({
                        status: false,
                        message: 'an argument is missing',
                    })
                }
            } catch (error) {
                return res.status(200).json({ status: false, message: error })
            }
        } else {
            return res
                .status(200)
                .json({ status: false, message: 'wrong method' })
        }
    } catch (error) {
        return res.status(200).json({ status: false, message: error })
    }
}
