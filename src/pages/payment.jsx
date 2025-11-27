import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Payment Page";
export default function payment() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Payment', path: '/payment' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Payment Page</p>
        </div>
    );
}