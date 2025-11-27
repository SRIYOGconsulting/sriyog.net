import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Feedback Page";
export default function feedback() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Feedback', path: '/feedback' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Feedback Page</p>
        </div>
    );
}