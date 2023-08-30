import { User } from "./types";

// Hành động thêm người dùng
export const addUser = (user: User) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

// Hành động cập nhật thông tin người dùng
export const updateUser = (user: User) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};

// Hành động xóa người dùng
export const deleteUser = (userId: number) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
