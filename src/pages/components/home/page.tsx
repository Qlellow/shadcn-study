import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ComponentsLayout from '@/pages/components/layout';
import { componentsData } from '@/pages/components/components-data';

const HomePage = () => {
  // 홈페이지에는 최신 2개만 표시
  const components = componentsData.slice(0, 2);

  const features = [
    {
      title: '컴포넌트 기반',
      description: '재사용 가능한 UI 컴포넌트로 빠르게 개발',
      icon: Code,
    },
    {
      title: '접근성',
      description: 'ARIA 표준을 준수하는 접근 가능한 컴포넌트',
      icon: Sparkles,
    },
    {
      title: '커스터마이징',
      description: 'Tailwind CSS로 자유롭게 스타일링',
      icon: Zap,
    },
  ];

  return (
    <ComponentsLayout>
      <div className="min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="size-3 sm:size-4" />
              shadcn/ui 실습 프로젝트
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Shadcn-Study
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              shadcn/ui 라이브러리를 학습하고 실습하는 개인 프로젝트입니다.
              <br />
              재사용 가능한 컴포넌트들을 직접 구현하며 React와 Tailwind CSS를 마스터해보세요.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="default" className="text-sm sm:text-base">
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                  공식 문서 보기
                  <ArrowRight className="size-3 sm:size-4 ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="default" className="text-sm sm:text-base">
                <Link to="/components">컴포넌트 둘러보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">주요 특징</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="size-10 sm:size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="size-5 sm:size-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">실습 컴포넌트</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-4">
            아래 컴포넌트들을 클릭하여 실습 페이지로 이동하세요
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {components.map((component, index) => {
              const Icon = component.icon;
              return (
                <Link
                  key={index}
                  to={component.path}
                  className="group block p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all hover:border-primary/50"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`size-10 sm:size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ${component.color}`}
                    >
                      <Icon className="size-5 sm:size-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                          {component.name}
                        </h3>
                        <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground">{component.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">shadcn/ui란?</h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg px-4">
              <p>
                shadcn/ui는 복사해서 사용하는 컴포넌트 라이브러리입니다. npm 패키지로 설치하는 것이
                아니라, 컴포넌트 코드를 직접 프로젝트에 복사하여 사용합니다.
              </p>
              <p>
                이 방식을 통해 컴포넌트를 완전히 소유하고 필요에 따라 자유롭게 수정할 수 있습니다.
                Radix UI와 Tailwind CSS를 기반으로 구축되어 접근성과 커스터마이징이 뛰어납니다.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t mt-16">
          <div className="text-center text-muted-foreground">
            <p>개인 학습 목적으로 제작된 프로젝트입니다.</p>
            <p className="mt-2 text-sm">
              Built with{' '}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                shadcn/ui
              </a>
              , React, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </ComponentsLayout>
  );
};

export default HomePage;
