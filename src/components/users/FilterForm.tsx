"use client";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  filterUsers,
  getInitializedData,
  getAllUniqueOrganizations,
} from "@/lib/utils/store";
import { UserDetails, StatusType, FilterType } from "@/constants/mock/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setUsers: Dispatch<SetStateAction<UserDetails[]>>;
  formData: FilterType; // Add this prop to pass default values
  setFormData: Dispatch<SetStateAction<FilterType>>; // Update state when input changes
}

const FilterForm: FC<Props> = ({ setUsers, formData, setFormData }) => {
  const [organizations, setOrganizations] = useState<string[]>([]);

  const { register, reset, handleSubmit, watch } = useForm<FilterType>({
    mode: "all",
    defaultValues: formData, // Set initial values from parent
  });

  const watchedValues = watch();

  useEffect(() => {
    setFormData(watchedValues); // Update parent state on form change
  }, [watchedValues, setFormData]);

  useEffect(() => {
    const uniqueOrganizations = getAllUniqueOrganizations();
    setOrganizations(uniqueOrganizations);
  }, []);

  const onSubmit = (data: FilterType) => {
    setUsers(filterUsers(data));
    setFormData(data);
  };

  const handleReset = () => {
    reset({});
    setFormData({} as FilterType); // Clear parent form state
    setUsers(getInitializedData() as UserDetails[]);
  };

  return (
    <form
      className="filter-form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset}
    >
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <select
          {...register("organization", {
            required: false,
          })}
        >
          <option value="">Select</option>
          {/* Map through the organizations and create an option for each */}
          {organizations.map((org, index) => (
            <option key={index} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="User"
          {...register("username", {
            required: false,
          })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: false,
          })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateJoined">Date</label>
        <input
          type="date"
          placeholder="Date"
          {...register("dateJoined", {
            required: false,
          })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", {
            required: false,
          })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          {...register("status", {
            required: false,
          })}
        >
          <option value="">Select</option>
          {/* Map through the StatusType values and create an option for each */}
          {(
            ["Inactive", "Pending", "Active", "Blacklisted"] as StatusType[]
          ).map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Filter</button>
      </div>
    </form>
  );
};

export default FilterForm;
