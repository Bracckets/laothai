import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'الصفحة الرئيسية', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'المشرفين', href: paths.dashboard.customers, icon: 'users' },
  { key: 'settings', title: 'الإعدادات', href: paths.dashboard.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
