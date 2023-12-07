
// import { Button } from "antd"
// import "./page.module.css"

// export default function Home() {
//   return (
//     <main className="container flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="">
//         <p className="main-header fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           <h1 className='page-header'>Welcome to the Next.Js application</h1>
//           <div className="page-header">Please click below button to proceed to blog page.</div>
//           <div>
//             <Button
//               href="/blog"
//               type='primary'
//             >
//               Blog
//             </Button>
//           </div>
//         </p>
//       </div>
//     </main>
//   )
// }
import Link from "next/link";
import styles from "./page.module.css";
import {Button} from "antd"

export default async function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Next.Js application
        </h1>

        <p className={styles.description}>
          <Button
            href="/blog"
            type='primary'
            className="text-white font-bold"
          >
          Go to blog page
          </Button>
        </p>
      </main>
    </div>
  );
}
