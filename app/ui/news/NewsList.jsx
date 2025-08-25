import { fetchNews } from "@/app/lib/news"
import Link from "next/link";

export default async function NewsList(){
  const news = await fetchNews();
  console.log(news);
  return(
    <>
      <h1>News</h1>
      {news?     
        <ul>
          {news.map(({id, title})=>
            <li key={id}>
              <Link href={`news/${id}`}>
                Click to {title}
              </Link>
            </li>
          )}
        </ul>:
      <p>No news found</p>}
    </>
  )
}