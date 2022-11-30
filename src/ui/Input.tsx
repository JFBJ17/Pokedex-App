import cn from 'clsx'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa'

import { SizeType } from '../interfaces/base'

interface Props {
  name?: string
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  state?: 'success' | 'error'
  id?: string
  hiddenLabel?: boolean
  label?: string
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  size?: SizeType
  fullWidth?: boolean
  placeholder?: string
  type?: string
}

export const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  state,
  id,
  hiddenLabel,
  label = 'Label',
  endIcon,
  startIcon,
  size = 'medium',
  fullWidth,
  placeholder,
  type = 'text'
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const classNames = cn('input', {
    'h-9': size === 'small',
    'h-11': size === 'medium',
    'h-[52px]': size === 'large',
    'border-gray-400': !state,
    'border-primary-main/[.6] shadow-sm shadow-primary-main': !state && isFocus,
    'border-green-400': state === 'success',
    'border-green-400/[.6] shadow-sm shadow-green-400':
      state === 'success' && isFocus,
    'border-red-400': state === 'error',
    'border-red-400/[.6] shadow-sm shadow-red-400':
      state === 'error' && isFocus,
    'w-full': fullWidth === true,
    'w-fit': !fullWidth,
    'mt-2': !hiddenLabel
  })

  const classNamesIcon = cn({
    'text-gray-600': !state,
    'text-green-400': state === 'success',
    'text-red-400': state === 'error',
    'text-base': size === 'small',
    'text-lg': size === 'medium',
    'text-xl': size === 'large',
    'cursor-pointer': type === 'password'
  })

  return (
    <>
      {!hiddenLabel && <label htmlFor={id}>{label}</label>}
      <div className={classNames}>
        {endIcon && <span className={classNamesIcon}>{endIcon}</span>}
        <input
          type={showPassword ? 'text' : type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className='bg-inherit outline-none w-full h-full placeholder:text-gray-600 text-gray-800'
        />
        {startIcon && !state && (
          <span className={classNamesIcon}>{startIcon}</span>
        )}
        {state === 'success' && (
          <span className={classNamesIcon}>{<AiOutlineCheckCircle />}</span>
        )}
        {state === 'error' && (
          <span className={classNamesIcon}>{<BiErrorCircle />}</span>
        )}
        {type === 'password' && !state && (
          <span
            className={classNamesIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
          </span>
        )}
      </div>
    </>
  )
}
