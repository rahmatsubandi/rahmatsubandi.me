const title = 'Rahmat Subandi – Personal portfolio'
const description = 'Personal portfolio and resume website Rahmat Subandi, a developer, writer, and tech enthusiast and creator of this website.'

const SEO = {
    title,
    description,
    canonical: 'https://rahmatsubandi.me',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://rahmatsubandi.me',
        title,
        description,
        images: [
            {
                url: 'https://rahmatsubandi.me/images/logo.png',
                alt: title
            }
        ]
    },
}

export default SEO