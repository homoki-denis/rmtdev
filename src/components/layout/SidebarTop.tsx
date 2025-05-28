import { ReactNode } from 'react';

export default function SidebarTop({ children }: { children: ReactNode }) {
  return <div className="sidebar__top">{children}</div>;
}
