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

import Logo from '@/assets/shadcn-study-logo.png';
import { Button } from '../ui/button';

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
                <Link to={subItem.url}>
                  <subItem.icon />
                  <span>{subItem.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="pointer-events-none select-none relative py-4 flex flex-row items-center justify-start">
        <Button size="icon-sm" className="size-8 dark:bg-transparent p-1.5" asChild>
          <img src={Logo} alt="logo" className="size-8" />
        </Button>
        <div className="grid grid-cols-2 text-left text-2xl font-black leading-tight items-center">
          <span className="truncate text-primary">shadcn</span>
          <span className="truncate text-primary/50">Study</span>
        </div>
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
                        <SidebarMenuButton tooltip={item.title}>
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
                      <SidebarMenuButton tooltip={item.title} asChild>
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
