import { lazy } from "react";

const Login = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Auth/Login")), 2000);
    })
);

const Home = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Home")), 1000);
    })
);

const Explore = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Explore")), 1000);
    })
);

const Notifications = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(
        () => resolve(import("./Dashboard/Notifications")),
        1000
      );
    })
);

const Messages = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Messages")), 1000);
    })
);

const Bookmarks = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Bookmarks")), 1000);
    })
);

const Lists = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Lists")), 1000);
    })
);

const Profile = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/Profile")), 1000);
    })
);

const More = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./Dashboard/More")), 1000);
    })
);

export {
  Login,
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
};
