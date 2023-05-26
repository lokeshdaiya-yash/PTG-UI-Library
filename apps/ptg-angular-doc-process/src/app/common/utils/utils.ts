/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @utilities ;
 * @description This file for utilities
**/

// get last item in url
export const getLastItem = (path: string) => path.substring(path.lastIndexOf('/') + 1);
