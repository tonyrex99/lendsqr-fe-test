import { FC } from "react";
import { UserDetails } from "@/constants/mock/types";
interface Props {
  user: UserDetails;
}

const UserDetailsMain: FC<Props> = ({ user }) => {
  return (
    <div className="user-details-main">
      <div className="user-info-card">
        <h2>Personal Information</h2>
        <div className="user-info-main">
          <div>
            <p>FULL NAME</p>
            <p>{`${user?.personal?.firstName} ${user?.personal?.lastName}`}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{String(user?.personal?.phone)?.replace(/\D/g, "")}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{user?.personal?.email}</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>{user?.personal?.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.personal?.gender || "Male"}</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>Single</p>
          </div>
          <div>
            <p>Children</p>
            <p>None</p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>Parent’s Apartment</p>
          </div>
        </div>
      </div>

      <div className="user-info-card">
        <h2>Education and Employment</h2>
        <div className="user-info-main">
          <div>
            <p>level of education</p>
            <p>{user?.eduNdWork?.level_of_education}</p>
          </div>
          <div>
            <p>employment status</p>
            <p>{user?.eduNdWork?.employment_status}</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>{user?.eduNdWork?.sector_of_employment}</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>{user?.eduNdWork?.duration_of_employment}</p>
          </div>
          <div>
            <p>office email</p>
            <p>{user?.eduNdWork?.office_email}</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>{`₦${user?.personal?.monthly_net_income}`}</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>{user?.eduNdWork?.loan_repayment}</p>
          </div>
        </div>
      </div>

      <div className="user-info-card">
        <h2>Socials</h2>
        <div className="user-info-main">
          {user?.socials?.twitter && (
            <div>
              <p>Twitter</p>
              <p>
                <a
                  href={`https://twitter.com/${user.socials.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{user.socials.twitter.split("/").pop()}
                </a>
              </p>
            </div>
          )}
          {user?.socials?.facebook && (
            <div>
              <p>Facebook</p>
              <p>
                <a
                  href={`https://facebook.com/${user.socials.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.socials.facebook.split("/").pop()}
                </a>
              </p>
            </div>
          )}
          {user?.socials?.instagram && (
            <div>
              <p>Instagram</p>
              <p>
                <a
                  href={`https://instagram.com/${user.socials.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{user.socials.instagram.split("/").pop()}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="user-info-card">
        <h2>Guarantor</h2>

        <div className="user-info-main">
          <div>
            <p>Full Name</p>
            <p>{`${user?.guarantor[0]?.firstName} ${user?.guarantor[0]?.lastName}`}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{String(user?.guarantor[0]?.phone)?.replace(/\D/g, "")}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{user?.guarantor[0]?.email}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>{user?.guarantor[0]?.relationship || "Unknown"}</p>
          </div>
        </div>
      </div>

      {user?.guarantor?.slice(1).map((guarantor, index) => (
        <div className="user-info-card" key={index}>
          <div key={index} className="user-info-main">
            <div>
              <p>Full Name</p>
              <p>{`${guarantor?.firstName} ${guarantor?.lastName}`}</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>{String(guarantor?.phone)?.replace(/\D/g, "")}</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>{guarantor?.email}</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>{guarantor.relationship || "Unknown"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetailsMain;
