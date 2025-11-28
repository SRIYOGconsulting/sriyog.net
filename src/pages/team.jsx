const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Role 1', image: '/images/team/1.png' },
    { id: 2, name: 'Team Member 2', role: 'Role 2', image: '/images/team/2.png' },
    { id: 3, name: 'Team Member 3', role: 'Role 3', image: '/images/team/3.png' },
    { id: 4, name: 'Team Member 4', role: 'Role 4', image: '/images/team/4.png' },
    { id: 5, name: 'Team Member 5', role: 'Role 5', image: '/images/team/5.png' },
    { id: 6, name: 'Team Member 6', role: 'Role 6', image: '/images/team/6.png' },
    { id: 7, name: 'Team Member 7', role: 'Role 7', image: '/images/team/7.png' },
    { id: 8, name: 'Team Member 8', role: 'Role 8', image: '/images/team/8.png' },
    { id: 9, name: 'Team Member 9', role: 'Role 9', image: '/images/team/9.png' },
];

export default function Team() {
    return (
        <div>
            {/* Full-width Ribbon Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 ">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Team</h1>
                </div>
            </div>

            <div className="min-h-screen footer">
                <div className="container mx-auto px-4 py-16 max-w-6xl">
                    <div className="text-center mb-16">
                        <p className="text-lg  max-w-2xl mx-auto">
                            Meet the dedicated individuals behind our success. We are a group of passionate professionals committed to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="flex flex-col items-center group">
                                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105 ring-4 ring-white">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold  mb-1">{member.name}</h3>
                                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{member.role}</p>

                                <div className="mt-4 w-12 h-1 bg-gray-200 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}