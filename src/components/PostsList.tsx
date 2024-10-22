import React from 'react';
import cn from 'classnames';
import { Post } from '../types/Post';
import { OnePost } from './OnePost';

type Props = {
  posts: Post[];
  activePostId: number | null;
  setActivePostId: (param: number | null) => void;
};

export const PostsList: React.FC<Props> = ({
  posts,
  activePostId,
  setActivePostId,
}) => (
  <div data-cy="PostsList">
    <p className="title">Posts:</p>

    <table
      className={cn('table is-striped is-hoverable is-narrow', {
        'is-fullwidth': !activePostId,
      })}
    >
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Title</th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {posts.map(post => (
          <OnePost
            post={post}
            activePostId={activePostId}
            setActivePostId={setActivePostId}
          />
        ))}
      
      </tbody>
    </table>
  </div>
);
