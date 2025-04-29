import Image from "next/image";

export default function Home() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-blue-100 to-blue-100 p-4">
  <div className="text-3xl font-bold bg-blue-200 text-blue-900 px-6 py-3 border border-blue-300 rounded-2xl shadow-md">
    Dashboard using Next.js 15 and shadCN
  </div>

  <div className="text-xl font-semibold bg-blue-300 text-blue-900 px-6 py-3 border border-blue-400 rounded-2xl shadow-md">
    Powered by
  </div>

  <div className="text-2xl font-semibold bg-blue-500 text-white px-6 py-3 border border-blue-600 rounded-2xl shadow-lg">
    Next.js 15 and shadCN
  </div>
</div>


  );
}
