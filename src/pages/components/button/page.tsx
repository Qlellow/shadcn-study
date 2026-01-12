import ComponentsLayout from '@/pages/components/layout';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import ButtonGroupDemo from '@/components/button/ButtonGroupDemo';

import { IconGitBranch } from '@tabler/icons-react';
import { ArrowUpRightIcon } from 'lucide-react';

const ButtonPage = () => {
  return (
    <ComponentsLayout>
      <div className="flex flex-col gap-8 justify-center h-full w-full min-w-0 max-w-full px-4 lg:w-fit sm:px-6">
        <div className="flex flex-col gap-2 w-full min-w-0">
          <h2 className="text-2xl font-bold">Button Size</h2>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-8 justify-center w-full">
            {/* Small */}
            <div className="flex flex-row gap-2">
              <Button size="sm" variant="outline">
                Small
              </Button>
              <Button size="icon-sm" aria-label="Submit" variant="outline">
                <ArrowUpRightIcon />
              </Button>
            </div>

            {/* Medium */}
            <div className="flex flex-row gap-2">
              <Button variant="outline">Default</Button>
              <Button size="icon" aria-label="Submit" variant="outline">
                <ArrowUpRightIcon />
              </Button>
            </div>

            {/* Large */}
            <div className="flex flex-row gap-2">
              <Button size="lg" variant="outline">
                Large
              </Button>
              <Button size="icon-lg" aria-label="Submit" variant="outline">
                <ArrowUpRightIcon />
              </Button>
            </div>

            {/* Icon */}
            <Button size="icon" aria-label="Submit" variant="outline">
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col gap-2 w-full min-w-0">
          <h2 className="text-2xl font-bold">Button Variant</h2>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-8 justify-center w-full">
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col gap-2 w-full min-w-0">
          <h2 className="text-2xl font-bold">Button Sidebar</h2>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-8 justify-center w-full">
            <Button variant="outline" size="sm">
              <IconGitBranch /> New Branch
            </Button>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col gap-2 w-full min-w-0">
          <h2 className="text-2xl font-bold">Button Disabled and Spinner</h2>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-8 justify-center w-full">
            <Button size="sm" variant="outline" disabled>
              <Spinner />
              Submit
            </Button>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Button Group</h2>
          <div className="flex justify-center">
            <ButtonGroupDemo />
          </div>
        </div>
      </div>
    </ComponentsLayout>
  );
};

export default ButtonPage;
