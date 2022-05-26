import routePrefix from '../routePrefix';
import { SortOrder, TrendingVideosModifier } from '../types/ApiTypes';

interface BaseTypeSafeRoute {
  type: string;
}

interface HomeRoute extends BaseTypeSafeRoute {
  type: 'home';
}

interface EventCalendarRoute extends BaseTypeSafeRoute {
  type: 'event-calendar';
}

interface AllVTubersRoute extends BaseTypeSafeRoute {
  type: 'all-vtubers';
}

interface GroupListRoute extends BaseTypeSafeRoute {
  type: 'group-list';
}

interface TrendingVTubersRoute extends BaseTypeSafeRoute {
  type: 'trending-vtubers';
}

interface GrowingVTubersRoute extends BaseTypeSafeRoute {
  type: 'growing-vtubers';
}

interface DebutVTubersRoute extends BaseTypeSafeRoute {
  type: 'debut-vtubers';
}

interface GraduateVTubersRoute extends BaseTypeSafeRoute {
  type: 'graduate-vtubers';
}

interface ReportIssueRoute extends BaseTypeSafeRoute {
  type: 'report-issue';
}

interface AboutRoute extends BaseTypeSafeRoute {
  type: 'about';
}

interface VTuberPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'vtuber';
}

interface VTuberRoute extends BaseTypeSafeRoute {
  type: 'vtuber';
  id: string;
}

interface GroupPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'group';
}

interface GroupRoute extends BaseTypeSafeRoute {
  type: 'group';
  name: string;
}

interface TrendingVideosPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'trending-videos';
}

interface TrendingVideosRoute extends BaseTypeSafeRoute {
  type: 'trending-videos';
  viewCountSortOrder: TrendingVideosModifier;
}

interface VTubersViewCountPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'vtubers-view-count';
}

interface VTubersViewCountRoute extends BaseTypeSafeRoute {
  type: 'vtubers-view-count';
  viewCountSortOrder: SortOrder;
}

type PlaceholderRoute =
  | VTuberPlaceholderRoute
  | GroupPlaceholderRoute
  | TrendingVideosPlaceholderRoute
  | VTubersViewCountPlaceholderRoute;

type TypeSafeRoute =
  | HomeRoute
  | EventCalendarRoute
  | AllVTubersRoute
  | GroupListRoute
  | TrendingVTubersRoute
  | GrowingVTubersRoute
  | DebutVTubersRoute
  | GraduateVTubersRoute
  | ReportIssueRoute
  | AboutRoute
  | VTuberRoute
  | GroupRoute
  | TrendingVideosRoute
  | VTubersViewCountRoute;

const GetPlaceholderBaseRoute = (
  route: PlaceholderRoute,
  placerHolderText: string
): string => {
  switch (route.type) {
    case 'vtuber':
      return `vtuber/${placerHolderText}`;
    case 'group':
      return `group/${placerHolderText}`;
    case 'trending-videos':
      return `trending-videos/${placerHolderText}`;
    case 'vtubers-view-count':
      return `vtubers-view-count/${placerHolderText}`;
  }
};

const GetBaseRoute = (route: TypeSafeRoute): string => {
  switch (route.type) {
    case 'home':
      return ``;
    case 'event-calendar':
      return `event-calendar`;
    case 'all-vtubers':
      return `all-vtubers`;
    case 'group-list':
      return `group-list`;
    case 'trending-vtubers':
      return `trending-vtubers`;
    case 'growing-vtubers':
      return `growing-vtubers`;
    case 'debut-vtubers':
      return `debut-vtubers`;
    case 'graduate-vtubers':
      return `graduate-vtubers`;
    case 'report-issue':
      return `report-issue`;
    case 'about':
      return `about`;
    case 'vtuber':
      return `vtuber/${route.id}`;
    case 'group':
      return `group/${route.name}`;
    case 'trending-videos':
      return `trending-videos/${route.viewCountSortOrder}`;
    case 'vtubers-view-count':
      return `vtubers-view-count/${route.viewCountSortOrder}`;
  }
};

export const GetPlaceholderRoute = (
  route: PlaceholderRoute,
  placerHolderText: string
): string => {
  return `${routePrefix}/${GetPlaceholderBaseRoute(route, placerHolderText)}`;
};

export const GetRoute = (route: TypeSafeRoute): string => {
  return `${routePrefix}/${GetBaseRoute(route)}`;
};

export const GoToPage = (route: TypeSafeRoute): void => {
  window.location.href = GetRoute(route);
};