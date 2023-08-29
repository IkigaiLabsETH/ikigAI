import { SidebarSettings } from './SidebarSettings';
import Link from 'next/link';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { FC } from 'react';

export const SidebarFooter: FC = () => {
  return (
    <div className="flex flex-row items-center gap-2 border-t border-neutral-600 pr-2 pt-2">
      <SidebarSettings />
      <Link
        href="https://twitter.com/livethelifetv"
        target="_blank"
        className="hover:opacity-50"
      >
        <TwitterLogoIcon />
      </Link>
      <Link
        href="https://github.com/"
        target="_blank"
        className="hover:opacity-50"
      >
        <GitHubLogoIcon />
      </Link>
      <Link
        href="https://discord.gg/"
        target="_blank"
        className="hover:opacity-50"
      >
        <DiscordLogoIcon />
      </Link>
    </div>
  );
};
