
import Link from 'next/link';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            ALfarillo Group
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              UNJBG
            </code>
            .
          </li>
          <li>Link to the  {' '} 
            <Link href="/pages/form" className="text-blue-500 hover:underline">
              form
            </Link>
          </li>

          <li>Link to the  {' '} 
            <Link href="/pages/report" className="text-blue-500 hover:underline">
              report
            </Link>
          </li>

         
        </ol>

       
      </main>
     
    </div>
  );
}
