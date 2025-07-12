const DashboardLoader = () => {
    return (
        <div className="container mx-auto py-6 space-y-6 animate-pulse">
            <div className="animate-pulse space-y-8">
                {/* উপরের হেডার */}
                <div className="flex justify-between items-center">
                    <div className="h-8 w-1/4 rounded-md bg-input dark:bg-secondary-foreground"></div>
                    <div className="h-8 w-1/5 rounded-md bg-input dark:bg-secondary-foreground"></div>
                </div>

                {/* উপরের তিনটি কার্ড */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className="h-36 rounded-lg bg-input dark:bg-secondary-foreground"></div>
                    <div className="h-36 rounded-lg bg-input dark:bg-secondary-foreground"></div>
                    <div className="h-36 rounded-lg bg-input dark:bg-secondary-foreground"></div>
                </div>

                {/* প্রধান কন্টেন্ট এলাকা */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* বাম দিকের চার্ট */}
                    <div className="lg:col-span-2  rounded-lg bg-input dark:bg-secondary-foreground p-4 md:p-6 ">
                        <div className="mb-4 h-6 w-1/3 rounded bg-secondary  dark:bg-secondary-foreground"></div>
                        <div className="mb-6 flex items-center space-x-4">
                            <div className="h-20 w-full rounded bg-secondary  dark:bg-input ">

                            </div>
                            <div className="h-20 w-full rounded bg-secondary dark:bg-input"></div>
                        </div>
                        <div className="flex h-56  items-end justify-between space-x-2 border-b border-l border-muted-foreground px-6 ml-16">
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '60%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '80%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '50%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '70%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '60%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '40%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '55%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input" style={{ height: '85%' }}></div>
                            <div className="w-16 rounded-t-md bg-secondary dark:bg-input hidden sm:block" style={{ height: '70%' }}></div>
                            <div className="w-16 rounded-t-lg bg-secondary dark:bg-input hidden md:block" style={{ height: '65%' }}></div>
                        </div>
                    </div>

                    {/* ডান দিকের বক্সগুলো */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="h-50 rounded-lg bg-input dark:bg-secondary-foreground"></div>
                        <div className="h-76 rounded-lg bg-input dark:bg-secondary-foreground"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLoader