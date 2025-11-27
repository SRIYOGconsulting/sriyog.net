import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is QR Page";
export default function qr() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'QR Code', path: '/qr' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is QR Page</p>
        </div>
    );
}