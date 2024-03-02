import { Marquee } from 'react-fast-marquee'
import users from '@/data/users.json'

export default function MarqueeUsers() {
  return (
    <Marquee>
      {users.map((user) => (
        <div key={user.id} className="marquee-item">
          <p className="font-bold">{user.username}</p>
        </div>
      ))}
    </Marquee>
  )
}
