import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Notice Page";
export default function notice() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Notice', path: '/notice' }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}
            
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Notice</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <p>This is Notice Page</p>
            </div>
        </div>
    );
}