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
      <div className="min-h-full w-full pt-12 sm:pt-16 pb-12 sm:pb-16 p-4">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 max-w-4xl w-full">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">변경사항</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              프로젝트의 주요 변경사항과 업데이트 내역을 확인하세요.
            </p>
          </div>

          {/* Changelog List */}
          <div className="space-y-4 w-full">
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
                      className="w-full justify-between p-3 sm:p-4 h-auto hover:bg-muted/50 min-w-0 gap-2"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 text-left min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">
                          <h2 className="text-base sm:text-lg md:text-xl font-semibold shrink-0">
                            {release.version}
                          </h2>
                          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                            {release.isPreRelease && (
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 shrink-0 whitespace-nowrap">
                                Pre-release
                              </span>
                            )}
                            {release.isLatest && (
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:text-green-400 shrink-0 whitespace-nowrap">
                                Latest
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground ml-auto shrink-0 whitespace-nowrap hidden sm:inline">
                          {release.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-muted-foreground shrink-0 whitespace-nowrap sm:hidden">
                          {release.date}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="size-4 sm:size-5 shrink-0" />
                        ) : (
                          <ChevronDown className="size-4 sm:size-5 shrink-0" />
                        )}
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 sm:px-4 pb-3 sm:pb-4 w-full overflow-x-auto">
                    <div className="pt-2 prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-p:text-sm sm:prose-p:text-base prose-code:text-xs sm:prose-code:text-sm">
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
