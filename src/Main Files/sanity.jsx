import {createClient} from '@sanity/client'

// Sanity Client 
const client = createClient({
    projectId: 'k20v4h2a', 
    dataset: 'production',
    useCdn: false,
})

export default client;
