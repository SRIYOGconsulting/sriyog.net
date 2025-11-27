import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Certificate Page";
export default function certificate() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Certificates', path: '/certificates' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Certificate Page</p>
        </div>
    );
}