

const DashboardLoader = () => {
    return (
        <div class="container mx-auto py-6 space-y-6 animate-pulse">

            <div class="flex justify-between items-center mx-4">
                <div class="h-12 bg-gray-200 rounded w-1/3"></div>
                <div class="h-10 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 mx-4">
                <div class="h-32 bg-gray-200 rounded"></div>
                <div class="h-32 bg-gray-200 rounded"></div>
                <div class="h-32 bg-gray-200 rounded"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-4">
                <div class="lg:col-span-2 h-64 bg-gray-200 rounded"></div>
                <div class="space-y-6">
                    <div class="h-64 bg-gray-200 rounded"></div>
                </div>
                <div class="space-y-6">
                    <div class="h-64 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLoader