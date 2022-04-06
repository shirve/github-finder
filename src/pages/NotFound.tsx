import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oopsie!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found</p>
          <Link to='/' className='btn btn-primary'>
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
