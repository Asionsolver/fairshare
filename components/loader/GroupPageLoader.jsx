
const GroupPageLoader = () => {
    return (
        <div class="container mx-auto py-6 max-w-4xl animate-pulse">

            <div class="mb-6 mx-4 flex items-center">
                <div class="h-5 bg-gray-200 rounded mr-2"></div>
                Back
            </div>

            <div class="flex items-center justify-between mb-6 mx-4">
                <div class="flex items-center gap-x-2 sm:gap-4">
                    <div class="bg-gray-200 p-6 sm:p-4 rounded-md"></div>
                    <div>
                        <div class="h-6 bg-gray-200 rounded w-1/2 mb-1"></div>
                        <div class="h-4 bg-gray-200 rounded w-full mb-1"></div>
                        <div class="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
                <div class="w-1/4 h-10 bg-gray-200 rounded"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 mx-4 animate-pulse">

                <div class="lg:col-span-2 h-64 bg-gray-200 rounded"></div>

                <div class="h-64 bg-gray-200 rounded"></div>
            </div>

            <div class="space-y-4 mx-4">

                <div class="grid w-full grid-cols-2 bg-gray-200 text-white h-5 rounded"></div>

                <div class="space-y-4 h-64 bg-gray-200 rounded"></div>
                <div class="space-y-4 h-64 bg-gray-200 rounded"></div>
            </div>
        </div>
    )
}

export default GroupPageLoader