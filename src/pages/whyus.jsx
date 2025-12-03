import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Why Us Page";
export default function WhyUs () {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Why Us', path: '/whyus' }
    ];

    

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}
            
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8 ">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Why Us</h1>
                </div>
            </div>

           <div className="max-w-6xl mx-auto flex flex-col gap-20 items-center justify-center px-4 pb-7">

                {/* SECTION 1 */}
                <div className="card2 grid md:grid-cols-2 gap-10 place-items-center">
                    <div className="space-y-6 max-w-md ">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                        We Make Finding Skilled Professionals Simple
                    </h1>
                    <p className="card2">
                        At SRIYOG, we’ve built a platform that connects clients with real, trusted professionals — from plumbers, electricians and carpenters to tutors, beauticians, and more. No more calling around or searching through unreliable ads — everything you need is in one place.
                    </p>
                    </div>

                    <img 
                    src="/images/home/1.jpg" 
                    alt="" 
                    className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
                    />
                </div>

                {/* SECTION 2 */}
                <div className="card2 grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
                    <div className="space-y-6 max-w-md text-left ">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                        Verified Experts, Diverse Services
                    </h1>
                    <p className="card2 ">
                        We vet and verify service providers so you get dependable, high-quality help. With dozens of service categories and thousands of skilled professionals, you have flexibility and choice — for quick repairs, tutoring, beauty services, and more.
                    </p>
                    </div>

                    <img 
                    src="/images/home/1.jpg" 
                    alt="" 
                    className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
                    />
                </div>

                {/* SECTION 3 */}
                <div className="card2 grid md:grid-cols-2 gap-10 place-items-center">
                    <div className="space-y-6 max-w-md ">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                        Easy to Use — Anytime, Anywhere
                    </h1>
                    <p className="card2">
                        SRIYOG is built to be user-friendly and accessible. With our web platform and mobile app, you can find, contact, and hire professionals from the comfort of your home — saving time and effort.
                    </p>
                    </div>

                    <img 
                    src="/images/home/1.jpg" 
                    alt="" 
                    className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
                    />
                </div>

                {/* SECTION 4 */}
                <div className=" grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
                    <div className="space-y-6 max-w-md text-left ">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                        Growing, Reliable, Evolving Platform
                    </h1>
                    <p className="card2">
                        Since 2016, SRIYOG has steadily grown and improved based on user needs. We continuously refine our platform to offer secure, reliable service — giving you peace of mind with every booking.
                    </p>
                    </div>

                    <img 
                    src="/images/home/1.jpg" 
                    alt="" 
                    className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
                    />
                </div>

                </div>
        </div>
    );
}