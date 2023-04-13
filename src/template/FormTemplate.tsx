import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

import Card from 'components/form/Card'
import InputField from 'components/common/InputField'
import { FormData } from 'types'

const FormTemplate = () => {
  const { register, handleSubmit, control, setValue } = useForm<FormData>({
    defaultValues: {
      nickname: '',
      email: '',
      introduction: '',
      company: '',
      developmentCareer: 0,
      qrLink: '',
      hashTagTypeList: [],
      animalType: '',
      colorType: '',
    },
  })
  const onSubmit = (data: FormData) => console.log(data)
  const values = useWatch({ control: control })

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') return
    if (e.key === 'Enter') {
      e.preventDefault()
      if (values.hashTagTypeList) {
        if (values.hashTagTypeList.length >= 5) {
          alert('태그는 최대 5개까지 입력할 수 있습니다.')
          return
        }
        setValue(
          `hashTagTypeList.${values.hashTagTypeList.length}`,
          e.currentTarget.value
        )
        e.currentTarget.value = ''
      }
    }
  }

  return (
    <div className="mx-4 my-10">
      <div className="text-lg text-slate-800 font-bold flex justify-center">
        테오콘 신청서
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
        <InputField
          label="닉네임"
          path="nickname"
          register={register}
          type="text"
        />
        <InputField
          label="이메일"
          path="email"
          register={register}
          type="text"
        />
        <InputField
          label="한줄소개"
          path="introduction"
          register={register}
          type="text"
        />
        <InputField
          label="직장/소속명"
          path="company"
          register={register}
          type="text"
        />
        <InputField
          label="경력"
          path="developmentCareer"
          register={register}
          type="number"
        />
        <InputField
          label="QR 링크"
          path="qrLink"
          register={register}
          type="text"
        />
        <div>
          <label htmlFor="tag">태그</label>
          <input
            id="tag"
            type="text"
            onKeyUp={handleKeyUp}
            className="block w-full appearance-none focus:ring-1 rounded-md border border-gray-200 bg-white mt-2 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-end gap-2 w-full">
          {values.hashTagTypeList?.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => {
                  if (!values.hashTagTypeList) return
                  setValue(`hashTagTypeList`, [
                    ...values.hashTagTypeList.slice(0, index),
                    ...values.hashTagTypeList.slice(index + 1),
                  ])
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-gray-100 mb-4 rounded-md h-12 flex items-center justify-center"
        >
          신청하기
        </button>
      </form>
      <Card {...values} />
    </div>
  )
}

export default FormTemplate
