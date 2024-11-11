import { usersStats } from "@/constants/mock/DummyUsersData";
import Image from "next/image";

const UsersStats = () => {
  return (
    <div data-testid="users-stats" className="users-stats">
      {usersStats.map((item, index) => {
        return (
          <div key={index} className="users-stats-box">
            <Image width={40} height={40} src={item.icon} alt="stat" />
            <p>{item.title}</p>
            <p>{item.count}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersStats;
