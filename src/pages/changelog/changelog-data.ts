export interface ChangelogRelease {
  version: string;
  date: string;
  isPreRelease?: boolean;
  isLatest?: boolean;
  content: string;
  contributors?: string[];
}

export const changelogData: ChangelogRelease[] = [
  {
    version: '1.0.0',
    date: '2025-01-15',
    isLatest: true,
    content: `## 주요 변경사항

### 새로운 기능
* **테이블 컴포넌트 분리**: 모든 테이블 컴포넌트를 개별 파일로 분리하여 유지보수성 향상
* **변경사항 페이지 추가**: 프로젝트의 변경사항을 추적할 수 있는 Changelog 페이지 추가
* **스크롤 복원 기능**: 페이지 이동 시 자동으로 스크롤을 맨 위로 이동하는 기능 추가

### 개선사항
* **헤더 테마 지원**: 라이트/다크 모드 전환 시 헤더 색상이 올바르게 변경되도록 수정
* **라우팅 개선**: 사이드바 네비게이션에서 React Router의 \`Link\` 컴포넌트 사용으로 페이지 새로고침 방지
* **ThemeProvider 안정성**: 뒤로가기 시 발생하던 Hook 오류 수정

### 버그 수정
* 헤더가 라이트 모드에서 색상이 변경되지 않던 문제 수정
* 페이지 이동 후 스크롤 위치가 유지되던 문제 수정
* 뒤로가기 시 React Hook 오류 발생 문제 수정`,
    contributors: ['shadcn-study'],
  },
  {
    version: '0.9.0',
    date: '2025-01-10',
    content: `## 주요 변경사항

### 새로운 기능
* **Skeleton 컴포넌트**: 로딩 상태를 표시하는 Skeleton 컴포넌트 추가
* **Table 컴포넌트**: 다양한 테이블 예제 추가 (Footer, Badges, Actions, Select, Input 등)

### 개선사항
* 컴포넌트 페이지의 검색 및 필터링 기능 개선
* 사이드바 UI 개선`,
  },
  {
    version: '0.8.0',
    date: '2025-01-05',
    content: `## 주요 변경사항

### 새로운 기능
* **Sonner 토스트**: 토스트 알림 컴포넌트 추가
* **Button 컴포넌트**: 다양한 버튼 스타일 및 그룹 기능 추가

### 개선사항
* 테마 전환 기능 개선
* 레이아웃 구조 개선`,
  },
  {
    version: '0.1.0',
    date: '2025-01-01',
    content: `## 초기 릴리스

### 새로운 기능
* **프로젝트 초기 설정**: React + Vite + TypeScript + Tailwind CSS 설정
* **shadcn/ui 통합**: shadcn/ui 컴포넌트 라이브러리 통합
* **라우팅 설정**: React Router를 사용한 라우팅 구조 구축
* **다크 모드 지원**: 테마 전환 기능 구현
* **사이드바 네비게이션**: 반응형 사이드바 네비게이션 구현
* **홈페이지**: 프로젝트 소개 및 컴포넌트 둘러보기 페이지`,
  },
];
