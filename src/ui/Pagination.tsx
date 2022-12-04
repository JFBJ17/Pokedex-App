import RCPagination from 'rc-pagination'

export const Pagination = () => {
  return (
    <RCPagination
      defaultCurrent={1}
      total={1154}
      defaultPageSize={20}
      jumpPrevIcon={<span>...</span>}
      showPrevNextJumpers
      showTitle
      jumpNextIcon={<span>...</span>}
      nextIcon={<span>&gt;</span>}
      prevIcon={<span>&lt;</span>}
      locale={{ next_page: 'siguiente', prev_page: 'anterior' }}
    />
  )
}
