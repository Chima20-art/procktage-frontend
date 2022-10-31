import { uid } from 'uid'
import { client } from '../../lib/sanity'

export default async function sendOrder(req, res) {
    try {
        if (req.method == 'POST') {
            try {
                const {
                    name,
                    nomDuResponsable,
                    telephone,
                    email,
                    message,
                    cart,
                } = JSON.parse(req.body)
                if (email) {
                    const doc = {
                        _type: 'demandes',
                        status: 'New',
                        entrepriseName: name,
                        nomResponsable: nomDuResponsable,
                        email: email,
                        telephone: telephone,
                        message: message,
                        products: cart?.map((item) => {
                            return {
                                _type: 'order',
                                _key: uid(32),
                                variant: item.variant.reference,
                                quantite: item.count,
                                product: {
                                    _type: 'reference',
                                    _ref: item?.product?._id,
                                },
                            }
                        }),
                    }

                    const sanityDoc = await client.create(doc)
                    return res
                        .status(200)
                        .json({ status: true, body: JSON.parse(req.body) })
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
        console.log('error in sendOrder ', error)
        return res.status(200).json({
            status: false,
            message: 'Something Went Wrong please contact us to fix it',
        })
    }
}
