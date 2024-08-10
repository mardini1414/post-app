import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import MainLayout from '../components/layout/MainLayout';
import { Frown, Search } from 'lucide-react';
import useFetchPost from '../hooks/useFetchPosts';
import PostList from '../components/blocks/PostList';
import PostListSkeleton from '../components/blocks/PostListSkeleton';

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [search, setSearch] = useState('');
  const { data, loading, error } = useFetchPost(search);

  return (
    <MainLayout subtitle="Post list">
      <div className="flex flex-wrap-reverse gap-4 justify-between items-center mb-4">
        <div className="w-full sm:w-1/2">
          <Input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search size={18} className="text-gray-500" />}
          />
        </div>
        <Button onClick={() => setIsHidden((hide) => !hide)}>
          {isHidden ? 'Show' : 'Hide'} posts
        </Button>
      </div>
      {!!error && !loading && (
        <div className="h-[400px] flex flex-col justify-center items-center">
          <div className="mb-3">
            <Frown size={50} className="text-gray-500" />
          </div>
          <span className="text-gray-500 text-sm">Unable to load data!</span>
        </div>
      )}
      {loading && !isHidden && <PostListSkeleton />}
      {!isHidden && !loading && !error && <PostList data={data} />}
    </MainLayout>
  );
};

export default Home;
