// export type News = {
//   articles: Cardtype[],
//   status:string,
//   totalResults:number,
// }
export type Cardtype = {
  author: string | null,
  content: string,
  description: string,
  publishedAt: string,
  source: src
  title: string,
  url: string,
  urlToImage: string,
}

type src = {
  id: string,
  name: string,
}