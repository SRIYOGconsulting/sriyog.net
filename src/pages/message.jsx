import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Message Page";
export default function message() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Message', path: '/message' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Message Page</p>
        </div>
    );
}