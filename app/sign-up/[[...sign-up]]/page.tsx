import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-6">
      <div className="w-full max-w-md flex justify-center  flex-col py-4 items-center bg-white rounded-lg shadow-lg ">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign up to Connectly</h1>
        <SignUp />
      </div>
    </div>
  )
}
