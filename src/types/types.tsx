export interface Markdown {
  markdownText: string
}

export interface Action {
  type: 'UPDATE_MARKDOWN'
  payload: string
}
