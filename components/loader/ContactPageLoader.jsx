import React from "react";

const ContactPageLoader = () => {
    return (
        <div class="container mx-auto px-4 py-6 animate-pulse">
            <div class="flex justify-between items-center mb-6">
                <div class="h-12 bg-secondary-foreground rounded w-1/4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div class="h-6 bg-secondary-foreground rounded w-1/4"></div>

                    <div class="flex flex-col gap-4 mt-6">
                        <div class="h-16 bg-secondary-foreground rounded"></div>

                    </div>
                </div>
                <div>
                    <div class="h-6 bg-secondary-foreground rounded w-1/4"></div>

                    <div class="flex flex-col gap-4 mt-6">
                        <div class="h-16 bg-secondary-foreground rounded"></div>
                        <div class="h-16 bg-secondary-foreground rounded"></div>
                        <div class="h-16 bg-secondary-foreground rounded"></div>
                        <div class="h-16 bg-secondary-foreground rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageLoader;
