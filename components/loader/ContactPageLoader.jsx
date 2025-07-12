import React from "react";

const ContactPageLoader = () => {
    const SkeletonBlock = ({ width = "full", height = "h-16" }) => (
        <div className={`${height} bg-input dark:bg-secondary-foreground rounded w-${width}`}></div>
    );

    return (
        <div className="container mx-auto px-4 py-6 animate-pulse">
            <div className="flex justify-between items-center mb-6">
                <SkeletonBlock width="1/4" height="h-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <SkeletonBlock width="1/4" height="h-6" />
                    <div className="flex flex-col gap-4 mt-6">
                        <SkeletonBlock />
                    </div>
                </div>
                <div>
                    <SkeletonBlock width="1/4" height="h-6" />
                    <div className="flex flex-col gap-4 mt-6">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonBlock key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageLoader;
