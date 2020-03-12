import rpc, { values } from './rpc'

export default async function getPageData(
  pageId: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<{ blocks: any[] }> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const data = await loadPageChunk({ pageId })
    const blocks = values(data.recordMap.block)

    if (blocks[0] && blocks[0].value.content) {
      // remove table blocks
      blocks.splice(0, 3)
    }

    return { blocks }
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err)
    return { blocks: [] }
  }
}

export function loadPageChunk({
  pageId,
  limit = 100,
  cursor = { stack: [] },
  chunkNumber = 0,
  verticalColumns = false
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): any {
  return rpc('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns
  })
}
