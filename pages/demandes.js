import React, { useContext, useState } from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'
import Link from 'next/link'
import OrdersContext from '../OrdersContext'

export default function Demandes({ websiteSettings, categories }) {
  const [name, setName] = useState('')
  const [nomDuResponsable, setNomDuResponsable] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { cart, removeFromCart, emptyCart } = useContext(OrdersContext)
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const handleButtonClick = () => {
    setIsAlertVisible(true)
  }

  const onSend = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (cart?.length >= 1) {
        const response = await fetch('/api/sendOrder', {
          method: 'POST',
          body: JSON.stringify({
            name,
            nomDuResponsable,
            telephone,
            email,
            message,
            cart,
          }),
        })
        let result = await response.json()
        //console.log('result', result)
        if (result.status) {
          setName('')
          setNomDuResponsable('')
          setTelephone('')
          setEmail('')
          setMessage('')
          emptyCart()
        } else {
          setErrorMessage(
              'une erreur est survenue dans le serveur, veuillez réesayer plutard'
          )
          setError(true)
        }
      } else {
        setErrorMessage(
            'Votre carte est vide, veuillez y ajouter des produits'
        )
        setError(true)
      }
    } catch (error) {
      setErrorMessage(
          'une erreur est survenue, veuillez réesayer plutard'
      )
      setError(true)
      console.log('error', error)
    }
    setLoading(false)
    setIsAlertVisible(true)
  }
  const handleSubmit = async (e) => {
    console.log('Sending')
    e.preventDefault()
    let data = {
      name,
      email,
      nomDuResponsable,
      telephone,
      message,
    }
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let result = await response.json()

    console.log('Response received!')
    if (result.status) {
      console.log('Response succeeded!')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
      <div className="h-full min-h-screen w-screen flex flex-col justify-between ">
        <Header websiteSettings={websiteSettings} categories={categories} />
        <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  my-10 text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-[#f5f5f5] w-full border border-grey-300 ">
          <p className="text-[14px] pb-2">demande de produit</p>
          <div
              id="tableau "
              className="mb-6 w-[100%] flex flex-col items-center "
          >
            <div className="bg-grey-900 w-[98%] flex text-white text-[10px] flex-6 py-4 px-2">
              <div className=" w-[20%]">image de produit</div>
              <div className="w-[40%]">description</div>
              <div className="w-[20%]">quatite (pqt)</div>
              <div className="w-[20%]">action</div>
            </div>
            {cart?.map((item) => {
              return (
                  <div
                      key={item.id}
                      className="bg-white w-[98%] flex text-gray text-[10px] h-full flex-6 py-3 px-2 "
                  >
                    <div className="w-[20%]">
                      {item?.product?.image && (
                          <img
                              src={urlFor(item?.product?.image)}
                              className="  w-[60px] h-[60px] object-contain"
                          />
                      )}
                    </div>
                    <div className="w-[40%] h-full  h-full">
                      <p className=" pb-1 font-bold">
                        {item?.product?.title}
                      </p>
                      <p className=" pb-1 ">
                        {item?.variant?.sizing}
                      </p>
                      <p className=" pb-1">
                        {' '}
                        {item?.variant?.quantite}
                      </p>
                    </div>
                    <div className="w-[20%] font-bold h-full">
                      {item?.count}
                    </div>
                    <div className="w-[20%]">
                      <button
                          onClick={() => removeFromCart(item)}
                          className="bg-red-400 py-3 px-2 uppercase text-beige hover:bg-gray rounded-[20px]"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
              )
            })}
          </div>
          <div className="bg-white">
            <div className="text-gray text-[11px] text-center pt-6 pb-3 font-bold">
              demande de devis
            </div>
            <form
                onSubmit={(e) => {
                  onSend(e)
                  handleSubmit(e)
                }}
                className=" lg:w-[400px] md:w-full  flex flex-col justify-between px-4 py-2 gap-6"
            >
              <div className="flex   bg-red-100 h-[54px] rounded-[50px] items-center px-4  drop-shadow-xl ">
                {' '}
                <div className="pr-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                </div>{' '}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent uppercase text-[14px] text-gray outline-none h-full"
                    placeholder="Nom de l'entreprise.."
                    required
                />
              </div>
              <div className="flex bg-red-100 h-[54px] rounded-[50px] items-center px-4  drop-shadow-xl">
                {' '}
                <div className="pr-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                    />
                  </svg>
                </div>{' '}
                <input
                    value={nomDuResponsable}
                    onChange={(e) =>
                        setNomDuResponsable(e.target.value)
                    }
                    className="w-full bg-transparent uppercase text-[14px] text-gray outline-none h-full"
                    placeholder="Nom du responsable.. "
                    reauired
                />
              </div>
              <div className="flex bg-red-100 h-[54px] rounded-[50px] items-center px-4 drop-shadow-xl">
                {' '}
                <div className="pr-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>{' '}
                <input
                    type="email"
                    className="w-full bg-transparent uppercase text-[14px] text-gray focus:outline-none outline-none border-0 h-full"
                    placeholder="Email.. "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div className="flex bg-red-100 h-[54px] rounded-[50px] items-center px-4 drop-shadow-xl">
                {' '}
                <div className="pr-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                    />
                  </svg>
                </div>{' '}
                <input
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="w-full bg-transparent uppercase text-[14px] text-gray outline-none h-full"
                    placeholder="telephone ex(0669875421) "
                    required
                />
              </div>
              <div className="flex bg-red-100 min-h-[164px] rounded-[38px] items-start px-4 py-4  drop-shadow-xl">
                {' '}
                <div className="pr-2 pt-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                  </svg>
                </div>{' '}
                <textarea
                    rows="4"
                    cols="50"
                    className="w-[90%] bg-transparent uppercase text-[14px] border-0 text-gray outline-none h-full"
                    placeholder="description... "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
              </div>

              <button
                  disabled={loading}
                  type="submit"
                  className="flex bg-red-700 h-[64px] rounded-[38px] items-center justify-center  cursor-pointer px-4 py-4  text-white drop-shadow-xl"
              >
                {' '}
                {loading ? (
                    <div role="status">
                      <svg
                          class="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                      </svg>
                    </div>
                ) : (
                    <div className="pr-2  flex flex-col items-cneter w-fit">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                      >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                      </svg>
                    </div>
                )}{' '}
                envoyez
              </button>
              {isAlertVisible && !error && (
                  <div className="flex text-[10px] items-center w-fit text-black">
                    {' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                      <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                      />
                    </svg>
                    <p>votre demande de devis a été envoyée</p>
                  </div>
              )}
              {isAlertVisible && error && (
                  <div className="flex text-[10px] items-center w-fit text-red">
                    {' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#f53e49"
                        className="w-6 h-6"
                    >
                      <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-500">{errorMessage}</p>
                  </div>
              )}
            </form>
          </div>
        </div>
        <div className="w-screen">
          <Footer websiteSettings={websiteSettings} />
        </div>
      </div>
  )
}

export async function getStaticProps(context) {
  let websiteSettings = client.fetch(
      `*[_type == 'settings'][0]{
        categories{
            categorie1->,
            categorie2->,
            categorie3->
        },
        contact,
        logo,
        media,
        seo,
    }`,
      {}
  )
  let categories = client.fetch(
      `*[_type == 'category' && !(_id in path("drafts.**")) ]{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product' && !(_id in path("drafts.**")) && references(^._id)])
              }
        }`
  )
  let promises = [websiteSettings, categories]
  promises = await Promise.all(promises)
  websiteSettings = promises[0]
  categories = promises[1]

  return {
    props: { websiteSettings, categories }, // will be passed to the page component as props
  }
}
