import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
const router=useRouter();
    useEffect(() => {
        
      setTimeout(()=>{
          router.push("/");
      },3000);
    }, [])

    return ( 
        <div className="not-found">
            <h1>ooooops...</h1>
            <p>that page cannot be found</p>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;