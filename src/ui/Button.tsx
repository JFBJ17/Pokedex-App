import cn from 'clsx'
import { SizeType } from '../interfaces/base'
interface Props {
  text?: string
  variant?: 'outline' | 'contained' | 'translucent'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  size?: SizeType
  fullWidth?: boolean
  disabled?: boolean
  shape?: 'pill' | 'squart' | 'rounded'
  color?: 'primary' | 'secondary'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<Props> = ({
  text = 'Button',
  variant = 'contained',
  size = 'medium',
  fullWidth,
  disabled,
  shape = 'rounded',
  color = 'primary',
  endIcon,
  startIcon,
  onClick
}) => {
  const classNames = cn('btn', {
    'py-1 px-2.5 text-[0.8125rem]': size === 'small',
    'py-1.5 px-4 text-[0.875rem]': size === 'medium',
    'py-2 px-[22px] text-[0.9375rem]': size === 'large',
    'bg-primary-light hover:bg-primary-main disabled:bg-primary-light/50 text-black':
      variant === 'contained' && color === 'primary',
    'bg-secondary hover:bg-secondary/[.98] disabled:bg-secondary/50 text-white':
      variant === 'contained' && color === 'secondary',
    'bg-transparent hover:bg-primary-main/[.08] border border-solid border-current hover:border-current text-primary-light hover:text-primary-main':
      variant === 'outline' && color === 'primary',
    'bg-transparent hover:bg-secondary/[.08] border border-solid border-current hover:border-current text-secondary hover:text-secondary':
      variant === 'outline' && color === 'secondary',
    'bg-primary-light/[.3] hover:bg-primary-light/[.4] text-primary-main':
      variant === 'translucent' && color === 'primary',
    'bg-secondary/[.3] hover:bg-secondary/[.4] text-secondary':
      variant === 'translucent' && color === 'primary',
    'w-full': fullWidth === true,
    rounded: shape === 'rounded',
    'rounded-full': shape === 'pill',
    'rounded-none': shape === 'squart'
  })
  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {endIcon && <span>{endIcon}</span>}
      {text}
      {startIcon && <span>{startIcon}</span>}
    </button>
  )
}
