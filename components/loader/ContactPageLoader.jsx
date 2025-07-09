import React from "react";

const ContactPageLoader = () => {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center">
                <div className="skeleton h-12 w-1/4 rounded"></div>
            </div>

            {/* Form Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((col) => (
                    <div key={col}>
                        <div className="skeleton h-6 w-1/4 rounded mb-4"></div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="skeleton h-16 rounded"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactPageLoader;
