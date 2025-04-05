'use client';

import { useProductStore } from '@/store/product.store';
import { useRouter } from 'next/navigation';
import React from 'react';

function UserAction({ item }) {
  console.log('item', item);

  const action = useProductStore((state) => state.action);
  const router = useRouter();

  console.log('action', action);

  return (
    <div className="flex gap-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={() => action.setUser(item)}
      >
        select
      </button>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        onClick={() => router.push(`/user/${item.id}`)}
      >
        read
      </button>
    </div>
  );
}

export default UserAction;
