import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

const config = {
    projectId: 'e970xo45',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const client = createClient(config)
