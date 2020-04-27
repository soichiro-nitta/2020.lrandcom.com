import { request } from '~/utils/request'
import { ArticleTypes } from '~/types'

const getItems = async (): Promise<ArticleTypes[]> => {
  // const { totalCount } = await request.get('/articles?limit=0', {
  //   headers: { 'X-API-KEY': process.env.MICROCMS_KEY }
  // })
  const totalCount = 10
  const { contents } = await request.get(`/articles?limit=${totalCount}`, {
    headers: { 'X-API-KEY': process.env.MICROCMS_KEY }
  })
  return contents
}

export default getItems
