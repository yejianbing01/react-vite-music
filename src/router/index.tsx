import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

// import Discover from "@/views/discover";
// import Mine from "@/views/mine";
// import Download from "@/views/download";
// import Focus from "@/views/focus";

const Discover = React.lazy(() => import("@/views/discover"));
const Mine = React.lazy(() => import("@/views/mine"));
const Download = React.lazy(() => import("@/views/download"));
const Focus = React.lazy(() => import("@/views/focus"));

const Recommend = React.lazy(() => import("@/views/discover/c-views/recommend"));
const Album = React.lazy(() => import("@/views/discover/c-views/album"));
const Artist = React.lazy(() => import("@/views/discover/c-views/artist"));
const DjRadio = React.lazy(() => import("@/views/discover/c-views/djradio"));
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking"));
const Songs = React.lazy(() => import("@/views/discover/c-views/songs"));

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <DjRadio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: 'focus',
    element: <Focus />
  }
];

export default routers;
