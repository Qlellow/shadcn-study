export interface ChangelogRelease {
  version: string;
  date: string;
  isPreRelease?: boolean;
  isLatest?: boolean;
  content: string;
  contributors?: string[];
}

// raw changelog data (isLatest 제외)
const rawChangelogData: Omit<ChangelogRelease, 'isLatest'>[] = [
  {
    version: '1.2.0',
    date: '2025-01-16',
    content: `## 주요 변경사항

### 성능 최적화
* **코드 스플리팅**: 모든 페이지에 React.lazy와 Suspense를 적용하여 초기 로딩 시간 단축
* **컴포넌트 메모이제이션**: React.memo, useCallback, useMemo를 활용하여 불필요한 리렌더링 방지
* **데이터 최적화**: 정적 데이터를 컴포넌트 외부로 이동하여 재생성 방지 (features, invoices 배열 등)

### 배포 개선
* **Vercel SPA 라우팅**: vercel.json 설정 추가로 모든 경로가 index.html로 리다이렉트되도록 구성
* **Vercel Analytics 수정**: @vercel/analytics/next에서 @vercel/analytics/react로 변경하여 빌드 에러 해결

### 개선사항
* **ComponentsPage 최적화**: 검색, 필터링, 뷰 모드 변경 핸들러를 useCallback으로 메모이제이션
* **HomePage 최적화**: features 배열을 컴포넌트 외부로 이동하고 components를 useMemo로 캐싱
* **TablePage 최적화**: invoices 데이터를 컴포넌트 외부로 이동
* **ChangelogPage 최적화**: toggleVersion 함수를 useCallback으로 메모이제이션
* **ComponentCard 메모이제이션**: React.memo를 적용하여 리렌더링 최적화

### 버그 수정
* Vercel 배포 시 컴포넌트 하위 페이지에서 새로고침하면 404 에러가 발생하던 문제 수정
* @vercel/analytics/next 사용으로 인한 빌드 에러 수정`,
    contributors: ['shadcn-study'],
  },
  {
    version: '1.1.0',
    date: '2025-01-16',
    content: `## 주요 변경사항

### 반응형 개선
* **테이블 페이지 반응형**: 각 테이블이 페이지 너비를 넘어갈 때 좌우 스크롤이 가능하도록 개선
* **Changelog 페이지 반응형**: 작은 화면에서도 날짜와 버전 정보가 잘 보이도록 레이아웃 최적화
* **테이블 컨테이너 개선**: ComponentContainer에 overflow-x-auto 추가하여 테이블 스크롤 기능 개선

### 개선사항
* **Header 표시 로직**: Header가 component 하위 페이지(button, table, skeleton 등)에서만 표시되도록 수정
* **DataTable 컴포넌트 구조**: DataTable을 ComponentContainer로 감싸서 다른 테이블 컴포넌트와 일관된 구조로 변경
* **코드 스플리팅**: Vite 빌드 최적화를 위해 큰 라이브러리들을 별도 청크로 분리하는 설정 추가
* **README 문서화**: 프로젝트 소개, 설치 방법, 기술 스택 등 상세한 README 작성

### 버그 수정
* 테이블이 페이지 너비를 넘어가도 스크롤이 생기지 않던 문제 수정
* changelog 페이지에서 잘못된 클래스명(w-2xl) 제거
* 모바일에서 날짜 정보가 숨겨지던 문제 수정`,
    contributors: ['shadcn-study'],
  },
  {
    version: '1.0.0',
    date: '2025-01-15',
    content: `
## 주요 변경사항
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
    version: '0.3.0',
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
    version: '0.2.0',
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

// 첫 번째 항목에만 자동으로 isLatest: true 추가
export const changelogData: ChangelogRelease[] = rawChangelogData.map((release, index) => ({
  ...release,
  isLatest: index === 0,
}));
