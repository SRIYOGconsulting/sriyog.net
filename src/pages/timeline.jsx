import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Timeline Page";
export default function timeline() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Timeline', path: '/timeline' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Timeline Page</p>
        </div>
    );
}