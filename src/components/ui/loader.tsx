import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { ring } = await import('ldrs')
      ring.register()
    }
    getLoader()
  }, [])
  return (
    <l-ring
      size="25"
      stroke="2.2"
      bg-opacity="0"
      speed="1.5" 
      color='currentColor'
    ></l-ring>
  ) 
}