

const PersonPageLoader = () => {
    return (
        <div class='container mx-auto py-6 max-w-4xl animate-pulse'>
            <div class='mb-6 mx-4'>
                <div class='h-10 w-28 bg-gray-200 rounded mb-4'></div>
                <div class='flex items-center justify-between'>
                    <div class='flex items-center gap-x-2 sm:gap-4'>
                        <div class='sm:h-16 sm:w-16 w-10 h-10 bg-gray-200 rounded'></div>
                        <div>
                            <div class='h-6 w-24 bg-gray-200 rounded mb-1'></div>
                            <div class='h-4 w-40 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                    <div class='flex items-center gap-2'>
                        <div class='h-10 w-28 bg-gray-200 rounded'></div>
                        <div class='h-10 w-28 bg-gray-200 rounded'></div>
                    </div>
                </div>
            </div>
            <div class='mb-6 mx-4'>
                <div class='h-32 w-full bg-gray-200 rounded'></div>
            </div>
            <div class='space-y-4 mx-4'>
                <div class='grid w-full grid-cols-2 bg-muted text-muted-foreground'>
                    <div class='h-10 w-full bg-gray-200 rounded'></div>
                    <div class='h-10 w-full bg-gray-200 rounded'></div>
                </div>
                <div class='space-y-4'>
                    <div class='h-40 w-full bg-gray-200 rounded'></div>
                </div>
                <div class='space-y-4'>
                    <div class='h-40 w-full bg-gray-200 rounded'></div>
                </div>
            </div>
        </div>
    )
}

export default PersonPageLoader