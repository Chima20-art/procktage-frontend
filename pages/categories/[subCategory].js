import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client } from '../../lib/sanity'

export default function SubCategory({
    subCategory,
    categories,
    websiteSettings,
}) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="max-w-5xl w-full flex flex-col items-center mx-auto py-8 h-full  ">
                {subCategory.title}
            </div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const subs = await client.fetch(`*[_type == 'subCategory' ]`, {})
    let paths = subs.map((item, index) => {
        return {
            params: {
                subCategory: item?.slug?.current,
            },
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const subCategoryTitle = context?.params?.subCategory
    const subCategoryQuery = `*[_type == 'subCategory' && slug.current == '${subCategoryTitle}' ][0]{ _id, image, slug, title, "products":*[_type=='product' && references(^._id) ] }`
    const subCategory = await client.fetch(subCategoryQuery, {})
    let websiteSettings = await client.fetch(`*[_type == 'settings'][0]`, {})
    let categories = await client.fetch(
        `*[_type == 'category']{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product' && references(^._id)])
              }
        }`
    )

    return {
        props: {
            subCategory,
            categories,
            websiteSettings,
        },
    }
}
