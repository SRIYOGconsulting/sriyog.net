import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import ClapButton from '../Components/ClapButton';

const pageName = "This is About Page";
export default function about() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is About Page</p>
            <div>
                <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">The Future of Sustainable Technology</h2>
                <p className="text-gray-700 mb-4">
                    As the world faces growing environmental challenges, sustainable technology has become more
                    crucial than ever. Companies and innovators are developing solutions that reduce carbon
                    footprints, optimize energy consumption, and promote eco-friendly practices across industries.
                </p>
                <p className="text-gray-700 mb-4">
                    From renewable energy systems to smart waste management and green transportation, these
                    technologies not only help protect the planet but also create new economic opportunities.
                    Businesses that embrace sustainable innovation gain a competitive edge while contributing to
                    long-term environmental well-being.
                </p>
                <p className="text-gray-700">
                    Ultimately, sustainable technology represents a win-win for both people and the planet,
                    proving that progress and responsibility can go hand in hand.
                </p>
                <ClapButton/>
                </div>
            </div>
        </div>
    );
}