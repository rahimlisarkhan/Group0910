'use client';

import { useProductStore } from '@/store/product.store';
import { useSearchParams } from 'next/navigation';
// import { Suspense } from 'react';

export const UserInfo = () => {
  const user = useProductStore((state) => state.user);

  // const searchParams = useSearchParams();
  // const category = searchParams.get('mebel');
  // const status = searchParams.get('status');

  return (
    <div>
      <div className="text-black">
        {/* Name:{user?.name} Surname:{user?.username} | {category} | {status} */}
        Name:{user?.name} Surname:{user?.username}
      </div>
    </div>
  );
};
