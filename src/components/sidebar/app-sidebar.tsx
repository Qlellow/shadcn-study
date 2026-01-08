import { useState } from 'react';
import { ChevronRight, Grid3x3, Home, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { componentsSubItems } from '@/components/sidebar/subitems';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
    subItems: [],
  },
  {
    title: 'Components',
    url: '/components',
    icon: Grid3x3,
    subItems: [
      ...componentsSubItems.map((subItem: { title: string; url: string; icon: LucideIcon }) => ({
        title: subItem.title,
        url: subItem.url,
        icon: subItem.icon as LucideIcon,
      })),
    ],
  },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const subItems = (subItems: { title: string; url: string; icon: LucideIcon }[]) => {
    return (
      subItems &&
      subItems.length > 0 && (
        <SidebarMenuSub>
          {subItems.map((subItem: { title: string; url: string; icon: LucideIcon }) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <a href={subItem.url}>
                  <subItem.icon />
                  <span>{subItem.title}</span>
                </a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )
    );
  };

  return (
    <Sidebar>
      <SidebarHeader className="relative py-4 flex items-center justify-center">
        <Link to="/" className="flex flex-row items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-7">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
          </svg>
          <div className="font-black text-2xl">Shadcn-Study</div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible
                defaultOpen
                onOpenChange={() => setIsOpen(!isOpen)}
                className="group/collapsible"
              >
                {items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems && item.subItems.length > 0 ? (
                      <CollapsibleTrigger asChild className="w-full">
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronRight
                            className={`ml-auto transition-transform duration-200 ${
                              isOpen ? 'rotate-90' : ''
                            }`}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                    {item.subItems && item.subItems.length > 0 && (
                      <CollapsibleContent>{subItems(item.subItems)}</CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                ))}
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarTrigger className="absolute top-7 -right-10 z-10" />
    </Sidebar>
  );
}
