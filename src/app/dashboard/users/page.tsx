/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "@/styles/users.scss";
import { useState, useEffect } from "react";
import UsersStats from "@/components/users/UsersStats";
import UsersTable from "@/components/users/UsersTable";
import ReactPaginate from "react-paginate";
import Loader from "@/components/general/Loader";
import Image from "next/image";
import { getInitializedData } from "@/lib/utils/store";
import { UserDetails } from "@/constants/mock/types";

const Users = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState<any>(0);
  const [itemOffset, setItemOffset] = useState<any>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10); // State for items per page

  // Invoke when user click to request another page.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  const fetchUsers = async () => {
    setLoading(true);
    setUsers(getInitializedData() as UserDetails[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  // Function to handle change in items per page
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let selectedValue = parseInt(e.target.value, 10);
    // If the selected value is greater than users.length, set it to users.length
    if (selectedValue > users.length) {
      selectedValue = users.length;
    }
    setItemsPerPage(selectedValue);
  };

  return (
    <section className="users">
      <h1>Users</h1>
      <div>
        <UsersStats />

        {loading ? (
          <Loader />
        ) : (
          <>
            <UsersTable
              users={currentItems}
              setUsers={(data) => {
                setUsers(data);
              }}
            />
            <div className="users-paginate">
              <div className="user-page-info" id="pagination">
                <p>
                  Showing{" "}
                  <span>
                    <select
                      value={itemsPerPage}
                      onChange={handleItemsPerPageChange}
                      className="items-per-page-dropdown"
                    >
                      {[5, 10, 15, 20, 25].map((number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      ))}
                    </select>{" "}
                  </span>
                  items per page out of {users?.length || 0}
                </p>
              </div>
              <ReactPaginate
                nextLabel={
                  <Image
                    width={14}
                    height={14}
                    src={"/images/icons/np_next_2.svg"}
                    alt="next image"
                  />
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel={
                  <Image
                    width={14}
                    height={14}
                    src={"/images/icons/np_next.svg"}
                    alt="previous image"
                  />
                }
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="arrow"
                nextClassName="arrow"
                breakLabel="..."
                containerClassName="pagination"
                activeClassName="arrow"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Users;
