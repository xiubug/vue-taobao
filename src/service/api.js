import fetch from '../config/fetch';

export const getUserList = () => fetch('GET', '/user/userList')