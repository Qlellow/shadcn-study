import { Table2, Bell, type LucideIcon, MousePointer2 } from 'lucide-react';

export interface ComponentInfo {
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  color: string;
  category?: string;
  tags?: string[];
}

/**
 * 컴포넌트 목록을 관리하는 파일입니다.
 * 새로운 컴포넌트를 추가할 때는 이 배열에 항목을 추가하기만 하면 됩니다.
 */
export const componentsData: ComponentInfo[] = [
  {
    name: 'Button',
    description: '버튼 컴포넌트 실습. 버튼의 다양한 스타일과 기능을 제공합니다.',
    path: '/components/button',
    icon: MousePointer2,
    color: 'text-purple-500',
    category: 'Form',
    tags: ['button', 'form', 'click'],
  },
  {
    name: 'Table',
    description:
      'TanStack Table을 활용한 데이터 테이블 컴포넌트. 정렬, 필터링, 페이지네이션 기능을 제공합니다.',
    path: '/components/table',
    icon: Table2,
    color: 'text-blue-500',
    category: 'Data Display',
    tags: ['table', 'data', 'sorting', 'filtering'],
  },
  {
    name: 'Sonner',
    description: 'Toast 알림 컴포넌트 실습. 다양한 타입의 알림 메시지를 표시할 수 있습니다.',
    path: '/components/sonner',
    icon: Bell,
    color: 'text-green-500',
    category: 'Feedback',
    tags: ['toast', 'notification', 'alert'],
  },
];
