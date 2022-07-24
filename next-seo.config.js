const title = 'Rahmat Subandi – Personal portfolio';
const description =
    'Personal portfolio and resume website Rahmat Subandi, a developer, writer, and tech enthusiast and creator of this website.';

const SEO = {
    title,
    description,
    canonical: 'https://www.rahmatsubandi.dev',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.rahmatsubandi.dev',
        title,
        description,
        images: [
            {
                url: 'https://www.rahmatsubandi.dev/images/logo.png',
                alt: title,
            },
        ],
    },
};

export default SEO;
