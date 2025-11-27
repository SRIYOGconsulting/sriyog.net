import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Gallery Page";
export default function gallery() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Gallery', path: '/gallery' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Gallery Page</p>
        </div>
    );
}