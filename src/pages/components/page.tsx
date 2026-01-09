import { Link } from 'react-router-dom';
import { ArrowRight, Search, Grid3x3, List } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { componentsData, type ComponentInfo } from './components-data';

const ComponentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // 카테고리 목록 추출
  const categories = useMemo(() => {
    const cats = new Set(componentsData.map(comp => comp.category || '기타'));
    return ['all', ...Array.from(cats)];
  }, []);

  // 필터링된 컴포넌트 목록
  const filteredComponents = useMemo(() => {
    return componentsData.filter(component => {
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">컴포넌트 둘러보기</h1>
          <p className="text-muted-foreground">
            shadcn/ui 라이브러리를 이용해, 다양한 컴포넌트들을 확인하고 실습해보았어요!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="컴포넌트 이름, 설명, 태그로 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter and View Mode */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-muted-foreground">카테고리:</span>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? '전체' : category}
                </Button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">보기:</span>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className="size-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            총 <span className="font-semibold text-foreground">{filteredComponents.length}</span>
            개의 컴포넌트
          </p>
        </div>

        {/* Components Grid/List */}
        {filteredComponents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">검색 결과가 없습니다.</p>
            <p className="text-muted-foreground text-sm mt-2">
              다른 검색어나 카테고리를 시도해보세요.
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'
            }
          >
            {filteredComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <ComponentCard key={index} component={component} Icon={Icon} viewMode={viewMode} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

interface ComponentCardProps {
  component: ComponentInfo;
  Icon: React.ComponentType<{ className?: string }>;
  viewMode: 'grid' | 'list';
}

const ComponentCard = ({ component, Icon, viewMode }: ComponentCardProps) => {
  if (viewMode === 'list') {
    return (
      <Link
        to={component.path}
        className="group flex items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all hover:border-primary/50"
      >
        <div
          className={`size-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ${component.color}`}
        >
          <Icon className="size-8" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {component.name}
            </h3>
            {component.category && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {component.category}
              </span>
            )}
            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
          </div>
          <p className="text-muted-foreground mb-2">{component.description}</p>
          {component.tags && component.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {component.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={component.path}
      className="group block p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all hover:border-primary/50 h-full"
    >
      <div className="flex flex-col h-full">
        <div
          className={`size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${component.color}`}
        >
          <Icon className="size-8" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {component.name}
            </h3>
            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
          </div>
          {component.category && (
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
              {component.category}
            </span>
          )}
          <p className="text-muted-foreground mb-3">{component.description}</p>
          {component.tags && component.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {component.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ComponentsPage;
