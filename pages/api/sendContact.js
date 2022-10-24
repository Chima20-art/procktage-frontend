import { client } from '../../lib/sanity'

export default async function sendContact(req, res) {
    try {
        if (req.method == 'POST') {
            try {
                const { name, nomDuResponsable, telephone, email, message } =
                    JSON.parse(req.body)
                if (telephone && email && message) {
                    const doc = {
                        _type: 'contact',
                        traite: false,
                        entrepriseName: name,
                        nomResponsable: nomDuResponsable,
                        email: email,
                        telephone: telephone,
                        message: message,
                    }
                    const sanityDoc = await client.create(doc)
                    //console.log('sanityDoc ', sanityDoc)
                    return res.status(200).json({
                        status: true,
                    })
                } else {
                    return res.status(200).json({
                        status: false,
                        message: 'an argument is missing',
                        body: JSON.parse(req.body),
                    })
                }
            } catch (error) {
                console.log(error)
                return res
                    .status(200)
                    .json({ status: false, message: JSON.stringify(error) })
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
