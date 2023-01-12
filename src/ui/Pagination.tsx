import RCPagination from 'rc-pagination'

interface Props {
  onChange?: (page: number, pageSize: number) => void
  total?: number
  currentPage?: number
}

export const Pagination: React.FC<Props> = ({
  onChange,
  total,
  currentPage
}) => {
  return (
    <RCPagination
      defaultCurrent={1}
      current={currentPage}
      total={total}
      defaultPageSize={20}
      jumpPrevIcon={<span>...</span>}
      showPrevNextJumpers
      showTitle
      jumpNextIcon={<span>...</span>}
      nextIcon={<span>&gt;</span>}
      prevIcon={<span>&lt;</span>}
      locale={{ next_page: 'siguiente', prev_page: 'anterior' }}
      onChange={onChange}
    />
  )
}
