import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Videos Page";
export default function videos() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Videos', path: '/videos' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Videos Page</p>
        </div>
    );
}