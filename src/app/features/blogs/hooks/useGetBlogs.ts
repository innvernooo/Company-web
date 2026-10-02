'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogRequest {
  name: string;
  title: string;
  blog: string;
}
export default function useGetBlogs() {
  const [blog, setBlogs] = useState<BlogRequest[]>([]);

  const getBlogs = async () => {
    try {
      const res: any = await axios.get(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/data/school-blogs',
      );
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return {
    blog,
    getBlogs,
  };
}
