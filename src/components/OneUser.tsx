import { User } from '../types/User';

type Props = {
  user: User;
  setSelectedUserId: (id: number | null) => void;
  setIsDropDownOpen: (status: boolean) => void;
};

export const OneUser: React.FC<Props> = ({
  user,
  setSelectedUserId,
  setIsDropDownOpen,
}) => {
  const handleUserSelect = () => {
    setSelectedUserId(user.id);
    setIsDropDownOpen(false);
  };

  return (
    <a
      href={`#user-${user.id}`}
      className="dropdown-item"
      onClick={handleUserSelect}
    >
      {user.name}
    </a>
  );
};
