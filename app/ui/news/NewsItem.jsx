import { fetchNewsItemById } from "@/app/lib/news"
import { notFound } from "next/navigation";

export default async function NewsItem({id}){

  const newsItem = await fetchNewsItemById(id);
  console.log(newsItem);
  if(!newsItem){
    return notFound();
  }
  return(
    <div className='newsItem'>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
    </div>
  )
}