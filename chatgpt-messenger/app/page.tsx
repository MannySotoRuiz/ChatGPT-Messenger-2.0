import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white px-2">
            <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon*/}
                        <SunIcon className="h-8 w-8"/>
                        <h2>Examples</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"Explain something to me"</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"What is the difference between a dog and a cat?"</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"What is the color of the sun?"</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon*/}
                        <BoltIcon className="h-8 w-8"/>
                        <h2>Capabilities</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">Change the ChatGPT Model to use</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">Messages are stored in Firebase's Firestore</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">Hot Toast notifications when ChatGPT is thinking!</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon*/}
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h2>Limitations</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">May occassionally generate incorrect information</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">May occassionally produce harmful instructions or biased content</p>
                        <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">Limited knowledge of world and events after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;