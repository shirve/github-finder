import { Link } from 'react-router-dom'
import { UserViewModel } from '../../models/User'

interface Props {
  user: UserViewModel
}

const UserItem = ({ user: { login, avatar_url } }: Props) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row item-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Avatar' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            to={`/user/${login}`}
            className='text-base-content text-opacity-40'
          >
            Show Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem
