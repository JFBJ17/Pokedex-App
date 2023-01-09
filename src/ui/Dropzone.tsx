import Image from 'next/image'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCamera } from 'react-icons/ai'

interface Props {
  files: any[]
  setFiles: React.Dispatch<React.SetStateAction<any[]>>
}

export const Dropzone: React.FC<Props> = ({ files = [], setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', 'jpg']
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    },
    maxFiles: 1
  })

  const thumbs = files.map(file => (
    <picture
      className='dropzoneContainer block w-full h-full bg-green-500'
      key={file.name}
    >
      <Image
        alt={file.name}
        src={file.preview}
        height='100%'
        width='100%'
        className='block w-full h-full object-cover rounded'
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </picture>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <section className='outline-2 outline-dashed outline-yellow-500 h-[250px] w-full rounded cursor-pointer'>
      <div {...getRootProps({ className: 'w-full h-full rounded' })}>
        <input {...getInputProps()} />
        {files.length > 0 ? (
          thumbs
        ) : (
          <span className='w-full h-full flex flex-col justify-center items-center text-gray-600'>
            <span className='text-4xl'>
              <AiOutlineCamera />
            </span>
            <p className='text-center'>
              Click para agregar una imagen o arrastra y suelta en esta área
            </p>
          </span>
        )}
      </div>
    </section>
  )
}
