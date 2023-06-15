import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
    const [message, setMessage] = useState(
        "Bonjour! J'aimerais obtenir un devis. Pouvez-vous me fournir les détails nécessaires ?"
    )
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
    const phoneNumber = '+212661476153'

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <div
            className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
            onClick={handleWhatsAppClick}
        >
            <img
                src="/whatsapp.svg"
                onClick={handleWhatsAppClick}
                className="cursor-pointer"
            />
        </div>
    )
}
