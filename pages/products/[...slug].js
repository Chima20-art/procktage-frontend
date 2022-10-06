import Footer from '../../components/footer'
import Header from '../../components/header'

export default function Product({ subCategory, categories, websiteSettings }) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="max-w-5xl bg-red-100 w-full flex flex-col items-center mx-auto py-8 h-full  ">
                <p>product</p>
            </div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}
