import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is QR Page";
export default function qr() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'QR Code', path: '/qr' }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}
            
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">QR Code</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <p>This is QR Page</p>
            </div>
        </div>
    );
}