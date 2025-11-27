import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is History Page";
export default function history() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'History', path: '/history' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is History Page</p>
        </div>
    );
}