import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Team Page";
export default function team() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Team', path: '/team' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Team Page</p>
        </div>
    );
}