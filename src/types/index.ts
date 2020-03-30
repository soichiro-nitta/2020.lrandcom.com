export type BlockTypes = {
  role: string
  value: {
    id: string
    version: number
    type: string
    properties: {
      title: string[][]
      source: string[][]
      language: string[][]
    }
    format?: {
      block_width: number
      display_source: string
      block_full_width: boolean
      block_page_width: boolean
      block_aspect_ratio: number
      block_preserve_scale: boolean
    }
    created_time: number
    last_edited_time: number
    parent_id: string
    parent_table: string
    alive: boolean
    file_ids: string[]
    created_by_table: string
    created_by_id: string
    last_edited_by_table: string
    last_edited_by_id: string
  }
}
