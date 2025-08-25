import NewsItem from "@/app/ui/news/NewsItem";

export default async function NewItemPage(props){
  const params = await props?.params;
  const newsItemId = params?.id;

  return(
    <NewsItem id={newsItemId}/>
  )
}