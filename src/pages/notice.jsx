import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Notice Page";
export default function notice() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Notice', path: '/notice' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Notice Page</p>
        </div>
    );
}