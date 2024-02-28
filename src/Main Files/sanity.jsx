import {createClient} from '@sanity/client'

const client = createClient({
    projectId: 'k20v4h2a', 
    dataset: 'production'
})
export default client;