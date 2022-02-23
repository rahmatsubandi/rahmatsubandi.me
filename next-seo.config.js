const title = 'Rahmat Subandi – Developer, writer, creator.'
const description =
    'Personal portfolio and resume website for Rahmat Subandi, a student, developer, writer, and creator of this website.'

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