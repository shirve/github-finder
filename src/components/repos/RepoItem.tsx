import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { RepoViewModel } from '../../models/Repo'

interface Props {
  repo: RepoViewModel
}

const RepoItem = ({ repo }: Props) => {
  const {
    name,
    description,
    html_url,
    forks_count,
    open_issues_count,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues_count}
          </div>
          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2' /> {forks_count}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
