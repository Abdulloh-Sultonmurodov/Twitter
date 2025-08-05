import { PATH } from "./path";

import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
} from "../pages";

import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
} from "../assets/icons";
import { Suspense } from "react";
import PageLoading from "./PageLoading";

export const RouteList = [
  {
    id: 1,
    path: PATH.main,
    title: "Home",
    icon: <HomeIcon />,
    activeIcon: <HomeIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Home />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 2,
    path: PATH.explore,
    title: "Explore",
    icon: <ExploreIcon />,
    activeIcon: <ExploreIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Explore />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 3,
    path: PATH.notification,
    title: "Notification",
    icon: <NotificationIcon />,
    activeIcon: <NotificationIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Notifications />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 4,
    path: PATH.messages,
    title: "Messages",
    icon: <MessagesIcon />,
    activeIcon: <MessagesIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Messages />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 5,
    path: PATH.bookmarks,
    title: "Bookmarks",
    icon: <BookmarksIcon />,
    activeIcon: <BookmarksIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Bookmarks />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 6,
    path: PATH.lists,
    title: "Lists",
    icon: <ListIcon />,
    activeIcon: <ListIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Lists />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 7,
    path: PATH.profile,
    title: "Profile",
    icon: <ProfileIcon />,
    activeIcon: <ProfileIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <Profile />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 8,
    path: PATH.more,
    title: "More",
    icon: <MoreIcon />,
    activeIcon: <MoreIcon active={true} />,
    element: (
      <Suspense fallback={<PageLoading isLoading={true} />}>
        <More />
      </Suspense>
    ),
    children: [],
  },
];
export default RouteList;
