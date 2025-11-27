import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is VMGO Page";
export default function vmgo() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Vision & Mission', path: '/vmgo' }
    ];

    return (
        <div>
            <BasicBreadcrumbs items={breadcrumbItems} />
            <p>This is VMGO Page</p>
        </div>
    );
}