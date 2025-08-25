import {z} from 'zod'
import { news } from './dummy-data'

const NewsItemScheme = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string()
})

//To demonstrate fetch news
export async function fetchNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetching ends');
      resolve(news);
    }, 1000);
  });
}

export async function fetchNewsItemById(id){

  
  return new Promise((resolve)=>{
    const found = news.find((newsItem) => id===newsItem.id.toString());
    resolve(found);
  });
}



