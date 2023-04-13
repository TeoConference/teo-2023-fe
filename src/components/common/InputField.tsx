import React from 'react'
import clsx from 'clsx'
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues>
  extends React.HTMLProps<HTMLInputElement> {
  path: Path<T>
  register: UseFormRegister<T>
  type?: 'number' | 'text'
  disabled?: boolean
  className?: string
}

type LabelProps = {
  id: string
  children: React.ReactNode
}

const Label = ({ id, children }: LabelProps) => {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}

const InputField = <T extends FieldValues>({
  path,
  register,
  className,
  label,
  type = 'text',
  disabled = false,
  ...rest
}: InputFieldProps<T>) => {
  return (
    <div>
      <Label id={path as string}>{label}</Label>
      <input
        className={clsx(
          className,
          'block w-full appearance-none rounded-md border border-gray-200 bg-white mt-2 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 sm:text-sm',
          !disabled && 'bg-gray-50 p-2 focus:ring-1',
          disabled && 'focus:ring-0'
        )}
        {...register(path, type === 'number' ? { valueAsNumber: true } : {})}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

export default InputField
