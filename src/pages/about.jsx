import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is About Page";
export default function about() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is About Page</p>
        </div>
    );
}