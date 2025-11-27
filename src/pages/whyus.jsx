import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Why Us Page";
export default function whyus() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Why Us', path: '/whyus' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is Why Us Page</p>
        </div>
    );
}