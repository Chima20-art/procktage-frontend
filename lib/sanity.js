import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

const config = {
    projectId: 'e970xo45',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
    token: 'skogQdAA7AALJhTFAs01gpGNF3vf9Efm7aWoET2533cZo7ZnCxlBM5BSOkKGctqkvF1bAwpLLaxlfgLLHl1xltDwaOqLDWg5n9V5iCUkfVZ0FW2AxmIEa8gGrCdqZ7As8B1HrGvwZDbEl0YGa6RDnEDIhtk9WZ5Fdu0d3OUBG3MDICIcw10C',
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const client = createClient(config)
