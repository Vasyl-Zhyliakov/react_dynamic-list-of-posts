import { useState } from 'react';
import cn from 'classnames';

import { User } from '../types/User';
import { OneUser } from './OneUser';

type Props = {
  users: User[];
  setSelectedUserId: (id: number | null) => void;
  selectedUserId: number | null;
};

export const UserSelector: React.FC<Props> = ({
  users,
  setSelectedUserId,
  selectedUserId,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const activeUser = users.find(user => user.id === selectedUserId);

  return (
    <div
      data-cy="UserSelector"
      className={cn('dropdown', { 'is-active': isDropDownOpen })}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {activeUser?.name ? (
            <span>{activeUser.name}</span>
          ) : (
            <span>Choose a user</span>
          )}

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => (
            <OneUser
              user={user}
              key={user.id}
              setSelectedUserId={setSelectedUserId}
              setIsDropDownOpen={setIsDropDownOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
