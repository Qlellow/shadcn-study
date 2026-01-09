import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { changelogData } from './changelog-data';
import ComponentsLayout from '@/pages/components/layout';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { markdownComponents } from '@/components/markdown/MarkdownComponents';

const ChangelogPage = () => {
  // 각 버전의 열림 상태를 독립적으로 관리
  const [openVersions, setOpenVersions] = useState<Set<number>>(new Set());

  const toggleVersion = (index: number) => {
    setOpenVersions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <ComponentsLayout>
      <div className="min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 max-w-4xl w-full">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">변경사항</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              프로젝트의 주요 변경사항과 업데이트 내역을 확인하세요.
            </p>
          </div>

          {/* Changelog List */}
          <div className="space-y-4 w-2xl">
            {changelogData.map((release, index) => {
              const isOpen = openVersions.has(index);
              return (
                <Collapsible
                  key={index}
                  open={isOpen}
                  onOpenChange={() => toggleVersion(index)}
                  className="border border-border rounded-lg overflow-hidden w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-3 sm:p-4 h-auto hover:bg-muted/50 min-w-0"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 text-left min-w-0">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold shrink-0">
                          {release.version}
                        </h2>
                        {release.isPreRelease && (
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 shrink-0">
                            Pre-release
                          </span>
                        )}
                        {release.isLatest && (
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:text-green-400 shrink-0">
                            Latest
                          </span>
                        )}
                        <span className="text-xs sm:text-sm text-muted-foreground ml-auto shrink-0 hidden sm:inline">
                          {release.date}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="ml-2 size-4 sm:size-5 shrink-0" />
                      ) : (
                        <ChevronDown className="ml-2 size-4 sm:size-5 shrink-0" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 sm:px-4 pb-3 sm:pb-4 w-full">
                    <div className="pt-2 prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown components={markdownComponents}>
                        {release.content}
                      </ReactMarkdown>
                    </div>

                    {release.contributors && release.contributors.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">Contributors:</p>
                        <div className="flex flex-wrap gap-2">
                          {release.contributors.map((contributor, idx) => (
                            <span
                              key={idx}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              @{contributor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </ComponentsLayout>
  );
};

export default ChangelogPage;
