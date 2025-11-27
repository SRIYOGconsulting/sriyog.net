import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Contact Page";
export default function contact() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Contact Page</p>
        </div>
    );
}